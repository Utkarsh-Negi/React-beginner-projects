import { useState, useEffect } from 'react';

const Api = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    // const posts_text = response.text();
    console.log(posts);
    setPosts(posts);
  };

  const createPost = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application /json:charset=UTF-8',
      },
    });
  };
  return (
    <>
      <button onClick={createPost}>create post</button>
      {posts.map((items, index) => (
        <h1 className="title" key={index}>
          {items.title}
        </h1>
      ))}
    </>
  );
};
export default Api;
