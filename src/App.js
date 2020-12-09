import React, { useState } from "react";
import "./styles.css";

const topicDictionary = {
  "JavaScript Basics": [
    [
      "Lesson-1",
      "https://rashitamehta.hashnode.dev/basics-of-javascript-episode-1"
    ],
    [
      "Lesson-2",
      "https://rashitamehta.hashnode.dev/interacting-with-the-browser-using-javascript-basic-episode-2"
    ]
  ],
  "Cool JavaScript": [
    [
      "JavaScript for LinkedIn",
      "https://rashitamehta.hashnode.dev/accepting-linkedin-connection-requests-using-javascript"
    ]
  ],
  "Random Blogs": [
    [
      "College Nostalgia",
      "https://thecollegetimes.org/quarantine/2020-or-semester-exams-which-is-better/"
    ],
    ["My Poetry Blog", "https://leasuremoments.blogspot.com/"]
  ],
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
      <h1 style={{ color: "#8B5CF6" }}>Check out my Blogs</h1>
      <h2>Click on any niche to see my blogs</h2>

      {list.map((topic) => {
        return <button onClick={() => clickHandler(topic)}>{topic}</button>;
      })}
      <hr></hr>
      {lis.map((blog) => {
        return (
          <div class="blog-name">
            <a href={blog[1]} target="_blank">
              {blog[0]}
            </a>
          </div>
        );
      })}
    </div>
  );
}
