import React from 'react';
import styles from './CourseListing.css';

let CourseListing = (title, courses) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.courseList}>
                <hr/>
                {
                    courses.map((course) => {
                        return (
                            <div className={styles.course}>
                                <p>
                                    <span className={styles.num}>{course.num}</span>
                                    {course.label} - {course.instructor}
                                    <span className={styles.term}>{course.term}</span>
                                </p>
                            </div>
                        )
                    })
                }
                <hr/>
            </div>
        </div>
    )
};

export default CourseListing;