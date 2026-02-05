const element1 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!",
);

const element2 = React.createElement(
  "h1",
  { className: "greeting" },
  "I am Hacker ",
);

ReactDOM.render(element1, document.getElementById("root"));

ReactDOM.render(element2, document.getElementById("root"));

// when we try to insert two element at same time then last element will be inserted
// jab ham apne khud local machine me code likh ke dekhe hai react ka tb wo hme ek element return kr rha tha
// but original react element nhi return krta hai , wo sirf ek object return krta hai
// jise react DOM apne virtual DOM me store krta hai
// aur phir virtual DOM ko real DOM me update krta hai

// React js sirf ui ka blueprint banata hai , aur react DOM us blueprint ko real DOM me render karta hai

const React = {
  createElement: function (type, props, ...children) {
    return {
      type: type,
      props: {
        ...props,
        children: children,
      },
    };
  },
};

const reactDom = {
  render: function (reactElement, root) {
    root.innerHTML = "";
    const element = document.createElement(reactElement.type);
    const { props } = reactElement;
    for (const key in props) {
      if (key === "style") {
        Object.assign(element.style, props);
      } else if (key === "children") {
        element.textContent = props[key];
      } else {
        element[key] = props[key];
      }
    }
    root.appendChild(element);
  },
};
