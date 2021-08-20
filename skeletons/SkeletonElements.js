import React from 'react';
import styles from './Skeleton.module.css';

const SkeletonElements = ({ type }) => {
    const classes = {
        'title': `${styles.skeleton} ${styles.title}`,
        'text': `${styles.skeleton} ${styles.text}`,
        'avatar': `${styles.skeleton} ${styles.avatar}`,
        'square': `${styles.skeleton} ${styles.square}`
    }
    
    
    return <div className={classes[type]} ></div>;
}

export default SkeletonElements
