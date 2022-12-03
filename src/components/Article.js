import React from "react";

function Article({title,preview, minutes, date= "January 1, 1970"}){
    const emoji = (minutes)=>{
        let emojiArr = []
        if(minutes < 30){
            const emojiNumber = Math.ceil(minutes/5)
            for(let i=0; i < emojiNumber; i++){
                emojiArr.push("☕️")
            }
        }
        if(minutes > 30){
            const emojiNumber = Math.ceil(minutes/10)
            for(let i=0; i < emojiNumber; i++){
                emojiArr.push("🍱")
            }
        }
        return emojiArr
    }
    return(<article>
        <h3>{title}</h3>
        <small>
            {date}
            {emoji(minutes)} 
            {` ${minutes} min read`}
        </small>
        <p>{preview}</p>
    </article>)
}
export default Article