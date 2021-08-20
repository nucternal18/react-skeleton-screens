import React from 'react'
import SkeletonElements from './SkeletonElements';
import styles from './Skeleton.module.css'
import Shimmer from './Shimmer';

const SkeletonArticle = ({ theme }) => {
    const themeClass =
      { light: styles.light, dark: styles.dark } || styles.light;
    return (
      <div className={`${styles.skeleton_wrapper} ${themeClass[theme]}`}>
        <div className={styles.skeleton_article}>
          <SkeletonElements type='title' />
          <SkeletonElements type='text' />
          <SkeletonElements type='text' />
          <SkeletonElements type='text' />
            </div>
            <Shimmer />
      </div>
    );
}

export default SkeletonArticle
