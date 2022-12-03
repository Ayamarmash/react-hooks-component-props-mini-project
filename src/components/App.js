import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import AtricleList from "./ArticleList"
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About props={blogData} image={blogData.image}/>
      <AtricleList posts= {blogData.posts}/>
    </div>
  );
}

export default App;
