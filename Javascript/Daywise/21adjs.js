let a=35;

a:35
// key:value
//object
{key:value}

b=67
b:67

function test(){
    console.log(test)
}

memory phase
a:35
b:67
function:{}

n=2;
function square(n){
    ans=n*n
    return ans
}
square2=square(n)
square4=square(5)

memory phase:
n:undefined
square:{}
square2:undefined
square4:undefined

// order of execution line by line
// inside > exceutes the execution context

//setinterval|| setinterval >> asynchronous operations >> delay of program
// dont want to delay the program
//setinterval >> execute after every interval    >> Pressure Cooker Whistling
//settimeout >> execute after timer is completed >> Timebomb

//CallStack >> trouble program 
//CallStack >> delay ur program >> doesnt executes >>send somewhere else (WEB API)
        // >> Timer is over >> callstack i wont take you because m busy right now 
        // >> Stand in Queue(Callback Queue)>> i have gatekeeper(event loop)
        // >> Event loop >> Keep checking callstack and callbackQueue >> callstack is free
        // >> When eventloop say , callstack is free   >> callstack  will entertain
        // >> Callstack will finally execute the code
        // >> Callstack > exceution context will be created >> memory code .....etc.....

// Javascript is popular because : asynchronous nature || nonblocking of the code
// setInterval || setTimeout

//use inbuilt operations
//create async operations

//callback
//promises
//async await
//fetch