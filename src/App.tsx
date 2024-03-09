import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight, FaTumblr} from "react-icons/fa";

interface Quote{
quote: string;
author:string;
}

const getRandomQuote =(): Quote =>{
return quotes[Math.floor(Math.random()*quotes.length)];
}

const getRandomColor=(): string =>{
const red=Math.floor(Math.random()*256);
const blue=Math.floor(Math.random()*256);
const green=Math.floor(Math.random()*256);
 return `rgb(${red},${green},${blue})`;
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

const [randomColor,setRandomColor]=useState<string>(getRandomColor());

const changeQuote =()=>{
  setQuote(getRandomQuote());
  setRandomColor(getRandomColor());
}

  return (
    <div className="background" style={{backgroundColor: randomColor}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor}}>
          <FaQuoteLeft size="30"/>
          <h2 id="text">
            {quote.quote}
            </h2>
            <FaQuoteRight size="30"/>
          <h4 id="author">
            - {quote.author}
            </h4>
        </div>
        <div className="buttons">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id="tweet-quote" style={{backgroundColor: randomColor,
        marginRight:"10px"}}>
          <FaTwitter color='white'/>
        </a>
        <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${quote.quote}`} id="tumblr-quote" style={{backgroundColor: randomColor,
        marginRight:"10px"}}>
          <FaTumblr color='white'/>
        </a>
        <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor}}>
          Change Quote
        </button>

        </div>
      </div>
    </div>
  );
}

export default App
