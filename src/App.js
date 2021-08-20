import "./App.css";
import React, { useState } from "react";
import { QuoteBox } from "./QuoteBox";
import {Text} from './Text';
import {Author} from './Author';
import {NewQuoteBtn} from './NewQuoteBtn';
import {TweetQuote} from './TweetQuote';
import {QUOTES} from './quotes';

const App = () => {
const [current, setCurrent] = useState(QUOTES[Math.floor(Math.random()*5)])

const handleClick = () => {
  setCurrent(QUOTES[Math.floor(Math.random()*5)])
}
return ( 
  <QuoteBox>
    <Text quote={current.quote}/>
    <Author author={current.author}/>
    <NewQuoteBtn onClick={handleClick}/>
    <TweetQuote/>
  </QuoteBox>
);
}

export default App;
