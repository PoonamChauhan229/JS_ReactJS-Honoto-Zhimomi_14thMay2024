Vue.js
React.js
Angular.js

Vite.js

npm create vite@latest 02DayReact   >> Project Name >> Folder

Need to install the following packages:
create-vite@5.5.5
Ok to proceed? (y) y
√ Package name: ... 02dayreact
√ Select a framework: » React
√ Select a variant: » JavaScript

Now run:

  cd 02DayReact
  npm install  
  npm run dev 
> 02dayreact@0.0.0 dev
> vite


VITE v5.4.11  ready in 449 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help


02DayReact
Folders
>node_modules  >>folders of all the necessary dependencies >> cdn link 
>public
>src

Files:
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js


Vite >> Upgraded

Older version
React >> npx create-react-app
npx create-react-app my-app
cd my-app
npm start


React Styling >>
External CSS  >> normal css
Internal CSS >>
Inline CSS >>

INternal >><style></style>
inline >> style=> attributes

style
style={{color:"red"}}
{} >> js

<!-- React >> 2013 -->
//Class Components >>
//Functional Components >>
// Hooks >> Functions
useState()

// IN JS >> count >> 0  >> 5 
//let count=0;
for(let i=count;i<=5;i++){
   // console.log(i)
    count=i
}
console.log("Count:",count)

//React >> Hooks >> useState()

//intial values >> intitialState
//let varaible=
//""
//[]
//{}
//null
//0
//100
//"ertyu"

const [state,setState]=useState(Initialvalue)
const [count,setCount]=useState(100) 
//count=100;
//setCount >> Function >> help the to update state
//setCount(400) >> count=400


function useState(){
    let count=1
    let setCount=()=>count+5;
    return [count,setCount]
}
const arr5=useState()
console.log(arr5);

const [count,setcount]=useState()       // useState is a react hook
console.log(count,setcount());

setCount()