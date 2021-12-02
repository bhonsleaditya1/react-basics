
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

const firstBook = {
  img:"https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg",
  title:'Will',
  author: 'Will Smith'
}
const secondBook = {
  img:"https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg",
  title:'Will 2',
  author: 'Will 2 Smith'
}
function BookList(){
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}
      >
        <p>
          Ipsum Lorem dolor sit amet consecteuru  
        </p>    
      </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author}/>
    </section>
  )
}



//const Book = ({img,title,author,children}) =>{
const Book = (props) =>{
  const {img,title,author,children} = props;
  return (
  <article>
    <Image img={img}/>
    <Title title={title}/>
    <Author author={author}/>
    {children}
  </article>)
};
const Image = (props) => {
  return (<img src={props.img} alt="" />)
}
const Title = (props) => {
  return (<h1>{props.title}</h1>)
} 
// CSS JSX
const Author = (props) => {
  return (<h4>{props.author}</h4>)
}

// Props children

ReactDom.render((<BookList/>),document.getElementById('root'));