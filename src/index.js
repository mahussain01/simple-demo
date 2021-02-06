import React from "react"
import ReactDOM from "react-dom"
import './index.css';

function BookList(){
 return(
   <section >
   <Book />
   <Book />
   <Book />
   <Book />
   <Book />
   <Book />


   </section>
 )
}

const Book =() =>{

 return ( <article>
  <Image > </Image>
  <Title></Title>
  <Author />
  </article>);
}
const Image =() =>{
  return ( <img src="https://m.media-amazon.com/images/I/61nV039OhwL._AC_AA180_.jpg" alt=""/>);
}

const Title =() =>{
  return(
    <h2>Oppo A15 Pouch</h2>
  );
}
const Author =() =>{
  return(

    <h1>M.Farooq</h1>
  );
}
ReactDOM.render(<BookList />,document.getElementById("root") );