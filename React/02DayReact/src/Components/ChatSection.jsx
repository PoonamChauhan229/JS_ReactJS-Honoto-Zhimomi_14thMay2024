import Chat from "./Chat"

const ChatSection=()=>{
    return(
        <div className="profileSection">
            <Chat
            message1={"Hi , How are You!!"}
            message2={"I am Fine What Abt you?"}
            message3={"I am good, Whats ur plan for today?"}
            message4={"As such No plan ..."}
            message5={"Lets Meet Up"}
            message6={"No.. Need to rest ...lets meet someother day"}
            message7={"Okay Takecare Buddy Bie"}
            classBg={"bgRed"}
            
            />
            <Chat
            message1={"Lets Meet Up"}
            message2={"No.. Need to rest ...lets meet someother day"}
            message3={"Okay Takecare Buddy Bie"}
            classBg={"bgNavy"}
            />
            <Chat
             message1={"Hi, Todays Session at 1:00PM"}
             message2={"Okay ... I will Join"}
             classBg={"bgPurple"}
            />

            <Chat 
            message1={"Need to Study!!!"}
            classBg={"bgOrange"}
            />
        </div>
    )
}
export default ChatSection