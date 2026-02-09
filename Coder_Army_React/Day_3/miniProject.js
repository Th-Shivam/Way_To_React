function Header() {
    return (
        <h1>Hello im the header</h1>
    )
}

function Main({user}) {
    return (
        <>
        <h2>Welcome {user.name} , to Election Commision of India Website </h2> <br />
        <h2>{user.age>18?"You are eligible":"You are not eligible"}</h2>
        </>
    )   
}

function Footer() {
    return (
        <h2>Im the footer</h2>
    )
}

function App() {

    return (
        <>
            <Header />
            <Main user={{name:"Shivam", age:21}} />
            <Footer />
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

