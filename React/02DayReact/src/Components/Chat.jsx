// const Chat=(props)=>{
const Chat=({message1,message2,message3,message4,message5,message6,message7,classBg,classImg,element,styleChat})=>{// desctructing over the fly
    console.log((Object.keys(element).length))
   // console.log(props)//object >{}
    // let {message1,message2,message3,message4,message5,message6,message7,classBg}=props    
   
    return(
        <>
           {
            message1?
            <>
             <div className={(Object.keys(element).length==4)?classImg:styleChat}>

               <div className="chat">
              {message1 &&  <p className="chatLeft">{message1}</p>}
               {message2 &&  <p className="chatRight">{message2}</p>}
                {message3 && <p  className="chatLeft">{message3}</p>}
               {message4 &&  <p className="chatRight">{message4}</p>}
                {message5 && <p className="chatLeft">{message5}</p>}
                {message6 && <p className="chatRight">{message6}</p>}
               {message7 &&  <p className="chatLeft">{message7}</p> }
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