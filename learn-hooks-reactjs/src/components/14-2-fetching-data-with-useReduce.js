import React, { useReducer, useEffect } from "react";
import axios from "axios";

const FetchingDataWithUseReduce2 = () => {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          poast: {},
          error: "something went wrong",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/3`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <p style={{ padding: 0, margin: 0 }}>
        <b>example with feaching data with useeffect with useReducer</b>
      </p>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default FetchingDataWithUseReduce2;
