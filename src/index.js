
import React from 'react';
import ReactDom from 'react-dom'
// CSS
import './index.css'

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

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
}

const Book = () =>{
  return (
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>)
};
const Image = () => {
  return (<img src="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg" alt="" />)
}
const Title = () => {
  const title = 'Will';
  return (<h1>{title}</h1>)
} 
// CSS JSX
const Author = () => {
  const author = 'Will Smith';
  return (<h4 style={{color:'red',fontSize:'0.75rem',matginTop:'0.25rem'}}>{author.toUpperCase()}</h4>)
}

ReactDom.render((<BookList/>),document.getElementById('root'));