const messageArray=[
    {
        message1: "Hi, Good morning!",
        message2: "Good morning! What a pleasant day!",
        message3: "yes, its a very beautiful day",
        message4: "So what are your plans for today?",
        message5: "I might go for shopping",
        message6: "Okay. Would you like to go to a book festival",
        message7: "Sure. I'll meet you there",
        classImg: "bgImg2"
    },
    {
        message1: "Hello Andrew",
        message2: "Hi",
        message3: "How's your health?",
        message4: "I'm feeling much better",
        message5: "Okay glad to know",
        message6: "Thanks for checking on me",
        message7: "Sure no problem",
        classImg: "bgImg2"
    },
    {
        message1: "Hello sir, what can i get you?",
        message2: "Hi, I'd like to purchase a laptop",
        message3: "What type of laptop would you like to buy?",
        message4: "I'm looking for macbook air latest version",
        message5: "Sure, we have variety of macbook version at our store. Which version would you like exactly?",
        message6: "I want macbook air 2024",
        message7: "Okay here you go.",
        classImg: "bgImg2"
    },
    {
        message1: "Hello Jim, the weather seems like its about to rain",
        message2: "Yes, it does",
        message3: "I think we should get back to our house",
        message4: "Yes that would be a good idea",
        message5: "Did you bring the umbrella?",
        message6: "Oh no, I left it at home",
        message7: "Okay no worries. Let's get back soon",
        classImg: "bgImg2"
    },
    {
        message1: "Hi sir where are you travelling to?",
        message2: "Hello, I'm travelling to bhopal",
        message3: "Would you like to buy ticket for one person or more",
        message4: "I'd like to buy ticket for 2 please",
        message5: "Okay. Here's your ticket",
        message6: "Thank you",
        message7: "Enjoy your travel.",
        classImg: "bgImg2"
    },
    {
        message1: "Hello Jim, the weather seems like its about to rain",
        message2: "Yes, it does",
        message3: "I think we should get back to our house",
        message4: "Yes that would be a good idea",
        message5: "Did you bring the umbrella?",
        message6: "Oh no, I left it at home",
        message7: "Okay no worries. Let's get back soon",
        classImg: "bgImg2"
    },
    {
        message1: "Hello Jim, the weather seems like its about to rain",
        message2: "Yes, it does",
        message3: "I think we should get back to our house",
        message4: "Yes that would be a good idea",
        message5: "Did you bring the umbrella?",
        message6: "Oh no, I left it at home",
        message7: "Okay no worries. Let's get back soon",
        classImg: "bgImg2"
    },
]

console.log(messageArray.length)
console.log(messageArray[0].length)
//.length >> works on array

// Array >> Key club  || values club

let new1=Object.values(messageArray[0])
console.log(new1)
console.log(new1.length)

let new2=Object.keys(messageArray[0])
console.log(new2)
console.log(new2.length)