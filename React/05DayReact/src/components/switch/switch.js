// console.log("switch case")
let count=1
// let val="increment"
// let val="decrement"
// let val=""
let displayCounter=document.getElementById('displayCounter')

function counterBtn(val){ // parameter
    switch(val){
        case "increment" :count++;
        break;
        case "decrement" :
            if(count>0){
                 count--;
            }   
            break;
        default:count=0;
        break;
    }
    console.log(count);
    displayCounter.innerText="Count:"+count

}

