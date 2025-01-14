import React from 'react';
import './Blog.css';
import SocialShare from '../components/SocialShare';
import TwitterFeed from '../components/TwitterFeed';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Comment optimiser votre PC pour le gaming',
      date: '2023-09-07',
      content:
        'Découvrez nos conseils pour améliorer les performances de votre PC pour les jeux. De la mise à jour des pilotes à l\'overclocking, nous vous expliquons tout.',
    },
    {
      id: 2,
      title: 'Les erreurs courantes à éviter lors de l\'assemblage d\'un PC',
      date: '2023-08-25',
      content:
        'L\'assemblage d\'un PC peut être délicat. Voici les erreurs les plus fréquentes et comment les éviter pour un montage réussi.',
    },
    {
      id: 3,
      title: 'Comment protéger votre PC contre les virus',
      date: '2023-08-10',
      content:
        'Les virus peuvent causer des dommages importants à votre PC. Apprenez à vous protéger avec nos conseils et astuces.',
    },
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p>{post.content}</p>
            <SocialShare
              url={window.location.href}
              title={post.title}
              description={post.content}
            />
          </div>
        ))}
      </div>
      <TwitterFeed />
    </div>
  );
}

export default Blog;
