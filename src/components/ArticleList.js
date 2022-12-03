import React from "react";
import Article from "./Article"
function AtricleList(props){
    const articlesComponents = props.posts.map((article)=>{
        return (<Article key={article.id} title={article.title} minutes={article.minutes} preview={article.preview} date={article.date}/>)
    })
    return(<main>
        {articlesComponents}
    </main>)
}
export default AtricleList