
import React from 'react';
import ReactDom from 'react-dom'
// CSS
import './index.css'

import {books} from './books'
import Book from './book'

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

// Props children

ReactDom.render((<BookList/>),document.getElementById('root'));