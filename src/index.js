
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

const books = [
  {
    id:1,
    img:"https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg",
    title:'Will',
    author: 'Will Smith'
  }, 
  {
    id:2,
    img:"https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg",
    title:'Will 2',
    author: 'Will 2 Smith'
  },
  {
    id:3,
    img:"https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._AC_SX184_.jpg",
    title:'Diary of Wimpy Kid',
    author: 'Jeff Kinney'
  }
]
// Simple List Iteration
// const names = ['john','peter','susan']
// const newNames = names.map((name)=>{
//   console.log(name);
//   return <h1>{name}</h1>;
// })
// console.log(newNames);

function BookList(){
  return (
    <section className='booklist'>
      {books.map((book)=>{
        //console.log(book);
        //const {img,title,author} = book;
        // return (
        //   <div>
        //     <h3>{title}</h3>
        //     <h6>{author}</h6>
        //   </div>
        // )
        //return <Book key={book.id} book={book}/>
        //spread operator
        return <Book key={book.id} {...book}/>
      })}
      {/* <Book 
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
        author={secondBook.author}/> */}
    </section>
  )
}



//const Book = ({img,title,author,children}) =>{
const Book = (props) =>{
  //console.log(props);
  //const {img,title,author,children} = props.book;
  //spread operator
  const {img,title,author,children} = props;
  //atribute, eventhandler 
  //onClick, onMouseOver
  const clickHandler  = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('hello there');
  };
  const complex = (author) =>{
    console.log(author);
  }
  return (
  <article className='book' onMouseOver={()=>{
    console.log(author);
  }}>
    <Image img={img}/>
    <Title title={title}/>
    <Author author={author}/>
    {/* {children} */}
    <button type='button' onClick={clickHandler}>
      button
    </button>
    <button type='button' onClick={()=>complex(author)}>more complex example</button>
  </article>)
};
const Image = ({img}) => {
  return (<img src={img} alt="" />)
}
const Title = ({title}) => {
  return (<h1 onClick={()=>{alert(title)}}>{title}</h1>)
} 
// CSS JSX
const Author = ({author}) => {
  return (<h4>{author}</h4>)
}

// Props children

ReactDom.render((<BookList/>),document.getElementById('root'));