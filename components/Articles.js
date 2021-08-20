import { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';
import SkeletonElements from '../skeletons/SkeletonElements';
import styles from '../styles/Home.module.css';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className={styles.articles}>
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div key={article.id} className={styles.article}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles &&
        [1, 2, 3, 5, 5].map((n) => <SkeletonArticle key={n} theme='dark' />)}
    </div>
  );
};

export default Articles;
