import { useState } from "react";

const Counter = ({show,setShow}) => {
    const counterBtn={
        border:"none",
        background:"none",
        fontSize:"17px",
        padding:"0px 5px",
        color:"white"
    }
    const btnContainer={
        width:"40%",
        margin:"0 30%",
        // border:"1px solid blue"
    }
    
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)

    const likeFunction=()=>setLike(like + 1)    
    const dislikeFunction=()=>setDislike(dislike + 1)

    const toggleSummary=()=>{
        setShow(!show)
    }
  return (
    <>
      <div style={btnContainer}>
        <button onClick={likeFunction} style={counterBtn}>👍{like}</button>
        <button onClick={dislikeFunction} style={counterBtn}>👎{dislike}</button>  
        <button style={counterBtn} onClick={toggleSummary}>{show?"🔻":"🔺"}</button>
      
      </div>

    </>
  );
};
export default Counter;
