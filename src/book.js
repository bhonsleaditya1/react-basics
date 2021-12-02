import React from "react";
import Image from './image'
import Author from './author'
import Title from './title'

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


export default Book;
