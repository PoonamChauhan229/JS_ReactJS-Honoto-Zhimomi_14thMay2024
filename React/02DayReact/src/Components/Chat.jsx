const Chat=(props)=>{
    console.log(props)
    return(
        <>
           {
            props.message1?
            <>
             <div className={props.classBg} >
               <div className="chat">
              {props.message1 &&  <p className="chatLeft">{props.message1}</p>}
               {props.message2 &&  <p className="chatRight">{props.message2}</p>}
                {props.message3 && <p  className="chatLeft">{props.message3}</p>}
               {props.message4 &&  <p className="chatRight">{props.message4}</p>}
                {props.message5 && <p className="chatLeft">{props.message5}</p>}
                {props.message6 && <p className="chatRight">{props.message6}</p>}
               {props.message7 &&  <p className="chatLeft">{props.message7}</p> }
                </div>               
           
            <div className="messageBtn">
                    <input type="text" name="" id="" />
                    <button>Send</button>
                </div>
            </div>
            </>
            : null
           }
            
        </>
    )
}
export default Chat