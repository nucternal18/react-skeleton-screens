import styles from './Skeleton.module.css';
import SkeletonElements from './SkeletonElements';
const SkeletonProfile = ({ theme }) => {
  const themeClass = { light: styles.light, dark: styles.dark };
  return (
    <div className={`${styles.skeleton_wrapper} ${themeClass[theme]}`}>
      <div className={styles.skeleton_profile}>
        <div>
          <SkeletonElements type='avatar' />
        </div>
        <div>
          <SkeletonElements type='title' />
          <SkeletonElements type='text' />
          <SkeletonElements type='text' />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
