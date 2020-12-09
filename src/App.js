import React, { useState } from "react";
import "./styles.css";

const topicDictionary = {
  "JavaScript Basics": ["Leson-1", "Leson-2"],
  "Cool JavaScript": ["JavaScript for LinkedIn"],
  "Random Blogs": ["College Nostalgia", "Poetry"],
  "": ""
};
const list = ["JavaScript Basics", "Cool JavaScript", "Random Blogs"];
export default function App() {
  const [lis, setlist] = useState([]);
  function getBlogs(topic) {
    return topicDictionary[topic];
  }
  function clickHandler(topic) {
    setlist(getBlogs(topic));
  }
  return (
    <div className="App">
      <h1>Check out my Blogs</h1>
      <h2>Click on any niche to see my blogs</h2>

      {list.map((topic) => {
        return <button onClick={() => clickHandler(topic)}>{topic}</button>;
      })}
      <ul>
        {lis.map((blog) => {
          return <li>{blog}</li>;
        })}
      </ul>
    </div>
  );
}
