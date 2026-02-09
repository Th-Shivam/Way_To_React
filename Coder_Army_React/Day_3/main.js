const element = React.createElement('h1',{"id":"heading","style":{"color":"red"}}, "Hello from React.createElement");

// element => React object => React element => Virtual DOM element => Real DOM element

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// ab agar ham directly html likh ke elements banana chah rhe hai to uske liye hame babel ka use krna padta hai
// babel hamare html code ko javascript code me convert kar deta hai
// or us code ko jsx kahte hai => Javascript XML 

const heading = <h1 id="heading" style={{color:"red"}}>Hello from JSX</h1>;

// heading => babel => React element => Virtual DOM element => Real DOM element

root.render(heading);

// ab ham ek react component banate hai , jo ki kuch khas nhi bs ek spl type function hai 

function App(){
    return <h1> Hello from App Component </h1>;
}

// isko render krna bhi asan hota hai do trh se kr skte hai
// 1=> root.render(<App />);
// 2=> root.render(App()) ;

root.render(<App />);
root.render(App()) ;

// ab ham is function me kuch pass bhi kr skte hai or andr use bhi kr skte hai 

let name = "Thakur Shivam SIngh" ;
function App2(props){
    return <h1> Hello from {props.name} </h1>;
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<App2 name={name} />);

// ham jo bhi pass krte h is component ko wo ke props object ban jata hai 

const courses = ["React", "Angular", "Vue"];

// add a key for each list item to avoid React warnings and ensure stable list rendering
const list = courses.map((course, index) => <li key={index}>{course}</li>);

const root3 = ReactDOM.createRoot(document.getElementById('courses'));
root3.render(<ul>{list}</ul>);