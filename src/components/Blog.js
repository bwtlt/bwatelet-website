import React, { useEffect, useState } from 'react';
import purify from 'dompurify';

const Blog = function () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const response = await fetch('https://bwatelet.fr/wordpress/wp-json/wp/v2/posts');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const postsrequest = await response.json();
      setPosts(postsrequest);
      setLoading(false);
    }
    loadPosts();
  }, []);

  function getDate(post) {
    const date = new Date(post.date);
    return <span>{date.toLocaleDateString()}</span>;
  }

  return (
    loading ? <p>LOADING</p>
      : (
        <div className="blog">
          {posts.map((post) => (
            <div className="blog-post" key={post.id}>
              <h2
                className="post-title"
              >
                {post.title.rendered}
              </h2>
              <h6>
                Publié le
                {' '}
                {getDate(post)}
              </h6>
              <div
                className="post-body"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={
                  { __html: purify.sanitize(post.content.rendered, { sanitize: true }) }
                }
              />
            </div>
          ))}
        </div>
      )
  );
};

export default Blog;
