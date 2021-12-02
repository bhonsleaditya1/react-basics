import React from 'react';
import ReactDom from 'react-dom'

//stateless functional compenent
// always return JSX
const Greetings = ()=>{
  return React.createElement('div',{},React.createElement('h1',{},'hello world'));
}
// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting opening tag same line as 

function Greeting() {
  return (
    <React.Fragment>
      <article>
        <h4>First React Component</h4>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </article>
      <div>

      </div>
    </React.Fragment>
  );
}

// Nested Components, React Tools

function Nested() {
  return (
    <div>
        <h1>John Doe</h1>
        <p>this is my message</p>
        <Person/>
        <Message/>
    </div>
  );
}

const Person = () => <h2>John Doe</h2>
const Message = () => <p>this is my message</p>


// Simple List Iteration
// const names = ['john','peter','susan']
// const newNames = names.map((name)=>{
//   console.log(name);
//   return <h1>{name}</h1>;
// })
// console.log(newNames);
ReactDom.render((<Greeting/>),document.getElementById('root'));