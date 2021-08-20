import { useEffect, useState } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';
import styles from '../styles/Home.module.css';

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <>
      <div className={styles.user}>
        <h2>User Details</h2>
        {profile && (
          <div className={styles.profile}>
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        )}

        {!profile && <SkeletonProfile theme='dark' />}
      </div>
    </>
  );
};

export default User;
