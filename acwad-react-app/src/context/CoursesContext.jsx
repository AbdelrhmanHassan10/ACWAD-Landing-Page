import React, { createContext, useContext, useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { adultCourses as staticAdultCourses, kidsCourses as staticKidsCourses } from '../data/coursesData';

const CoursesContext = createContext();

export function useCourses() {
    return useContext(CoursesContext);
}

export function CoursesProvider({ children }) {
    const [adultCourses, setAdultCourses] = useState(staticAdultCourses);
    const [kidsCourses, setKidsCourses] = useState(staticKidsCourses);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen to adults courses
        const adultsRef = ref(db, 'courses/adults');
        const kidsRef = ref(db, 'courses/kids');

        const unsubAdults = onValue(adultsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert object to array, preserving order
                const coursesArray = Object.values(data);
                setAdultCourses(coursesArray);
            }
            // If no data in Firebase, keep the static fallback
        }, (error) => {
            console.warn('Failed to load adult courses from Firebase, using static data:', error.message);
        });

        const unsubKids = onValue(kidsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Fix old links coming from Firebase for kids tracks
                const coursesArray = Object.values(data).map(course => {
                    if (course.link && course.link.includes('/kids-track/')) {
                        return {
                            ...course,
                            link: course.link.replace('/kids-track/', '/kids/').replace('.html', '')
                        };
                    }
                    return course;
                });
                setKidsCourses(coursesArray);
            }
        }, (error) => {
            console.warn('Failed to load kids courses from Firebase, using static data:', error.message);
        });

        setLoading(false);

        return () => {
            unsubAdults();
            unsubKids();
        };
    }, []);

    const value = {
        adultCourses,
        kidsCourses,
        loading
    };

    return (
        <CoursesContext.Provider value={value}>
            {children}
        </CoursesContext.Provider>
    );
}
