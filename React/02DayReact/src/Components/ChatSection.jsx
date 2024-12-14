import Chat from "./Chat"
// 1 array >>10 objects
// {message1:-message3 classBg:}


const ChatSection=()=>{

    const messagaeArray=[
        {
            message1: "Hi, Good morning!",
            message2: "Good morning! What a pleasant day!",
            message3: "yes, its a very beautiful day",
            message4: "So what are your plans for today?",
            message5: "I might go for shopping",
            message6: "Okay. Would you like to go to a book festival",
            message7: "Sure. I'll meet you there",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hi sir where are you travelling to?",
            message2: "Hello, I'm travelling to bhopal",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hello Andrew",
            message2: "Hi",
            message3: "How's your health?",
            message4: "I'm feeling much better",
            message5: "Okay glad to know",
            message6: "Thanks for checking on me",
            message7: "Sure no problem",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hi sir where are you travelling to?",
            message2: "Hello, I'm travelling to bhopal",           
            message7: "Enjoy your travel.",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hello sir, what can i get you?",
            message2: "Hi, I'd like to purchase a laptop",
            message3: "What type of laptop would you like to buy?",
            message4: "I'm looking for macbook air latest version",
            message5: "Sure, we have variety of macbook version at our store. Which version would you like exactly?",
            message6: "I want macbook air 2024",
            message7: "Okay here you go.",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hello Jim, the weather seems like its about to rain",
            message2: "Yes, it does",
            message3: "I think we should get back to our house",
            message4: "Yes that would be a good idea",
            message5: "Did you bring the umbrella?",
            message6: "Oh no, I left it at home",
            message7: "Okay no worries. Let's get back soon",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hi sir where are you travelling to?",
            message2: "Hello, I'm travelling to bhopal",
            message3: "Would you like to buy ticket for one person or more",
            message4: "I'd like to buy ticket for 2 please",
            message5: "Okay. Here's your ticket",
            message6: "Thank you",
            message7: "Enjoy your travel.",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hello Jim, the weather seems like its about to rain",
            message2: "Yes, it does",
            message3: "I think we should get back to our house",
            message4: "Yes that would be a good idea",
            message5: "Did you bring the umbrella?",
            message6: "Oh no, I left it at home",
            message7: "Okay no worries. Let's get back soon",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
        {
            message1: "Hello Jim, the weather seems like its about to rain",
            message2: "Yes, it does",
            message3: "I think we should get back to our house",
            message4: "Yes that would be a good idea",
            message5: "Did you bring the umbrella?",
            message6: "Oh no, I left it at home",
            message7: "Okay no worries. Let's get back soon",
            classImg: "bgImg2",
            styleChat:"styleChat"
        },
    ]
    
    return(
        <>
        {/* <div className="profileSection">
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
        </div> */}
    {/* Any chat box which we have less than = 3 .... color:yellow bgColor:blue */}
    
        <div className="profileSection">
            {/* array.map() */}
            {
                messagaeArray.map((element)=>(
                    // console.log("messagaeArray",element)
                    // console.log("messagaeArray",Object.keys(element).length)

                         <Chat     message1= {element.message1}
                                    message2= {element.message2}
                                    message3= {element.message3}
                                    message4= {element.message4}
                                    message5= {element.message5}
                                    message6={element.message6}
                                    message7= {element.message7}
                                    classImg={element.classImg}   
                                    styleChat={element.styleChat}  
                                    element={element}
                    />
            ))
            }
        </div>
        </>
    )
}
export default ChatSection
// style attribute >> objects >> 
// useState() >> Hooks

