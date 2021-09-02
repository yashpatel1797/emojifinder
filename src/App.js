import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
    "😅" : "Grinning Face with Sweat",
    "😂" : "Face with Tears of Joy",
    "😪" : "Sleepy Face",
    "😵" : "Dizzy Face",
    "😉" : "Winking Face"

}

//array of emojidictionary
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {

 var [ meaning, setMeaning ] = useState("");

function emojiInputHandler(event){
  var userInput = event.target.value;

  var meaning = emojiDictionary[userInput];

  if(meaning === undefined) {
    meaning = "Not available in database";
  }

  setMeaning(meaning);
}

function emojiClickHandler(emoji) {
  var meaning = emojiDictionary[emoji];
  setMeaning(meaning);
}

  return (
    <div className="App">
      <h1 >Welcome</h1>
      <input onChange={ emojiInputHandler }></input>
      <div>  { meaning }</div>

      <h3> emoji we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick= {() => emojiClickHandler(emoji)}
            style = {{ fontSize : "2.4rem", padding : "0.5rem", cursor:"pointer"}}
            ket = {emoji}
            > {emoji} </span>
        )
      })}

    </div>
  );
}
