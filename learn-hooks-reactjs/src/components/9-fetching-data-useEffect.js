import React, { useState, useEffect } from "react";
import axios from "axios";

const FechingDataUseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getPostId = (postId) => {
    console.log(postId);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id) {
      getPostId(id);
    }
  }, [id]);
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0 }}>Feching Data UseEffect</h3>

      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {id === "" && (
        <ul>
          {/* all data */}
          {/* {posts.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))} */}

          {/* use limit data */}
          {posts.slice(posts.length - 5).map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}

      {id !== "" && (
        <ul>
          <li>{post.title}</li>
        </ul>
      )}
    </div>
  );
};

export default FechingDataUseEffect;
