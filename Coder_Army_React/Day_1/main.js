// yaha pe maan lo ki hame ek element bana ke DOM me append karna hai 

// const element = document.createElement('h1');
// element.textContent = 'Hello World';
// element.className = 'heading';
// element.id = 'main-heading';
// element.style.color = 'red';    
// element.style.backgroundColor = 'blue';

// const root = document.getElementById('root');

// root.append(element);

// ab hame similar type ka hi ek or element bana ke DOM me append karna hai 
// to hame phirse pura pura code likhna padega , jo dry principle ko violate krta hai
// to ham ek function bana lete hai , jo ki element bana diya krega 

function createElement(tagName , attributes , children){
    const element = document.createElement(tagName);
    element.textContent = children;
    for(let key in attributes){
        element.setAttribute(key , attributes[key]);
    }
    
    return element;
}

const element1 = createElement("h1" , {"id":"main-heading" , "class":"heading" , "style":"color:red"    } , "Hello World");

const root = document.getElementById("root");
root.append(element1);  

// ab aise hm jitna chahe utna element bana sakte hai , bina baar baar pura pura code likhe

