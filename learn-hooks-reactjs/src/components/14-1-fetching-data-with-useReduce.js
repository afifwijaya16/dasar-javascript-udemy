import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingDataWithUseReduce1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
      });
  }, []);
  return (
    <div>
      <p style={{ padding: 0, margin: 0 }}>
        <b>example with feaching data with useEffect</b>
      </p>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default FetchingDataWithUseReduce1;
