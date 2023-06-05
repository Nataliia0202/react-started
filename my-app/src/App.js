import React, {useState} from "react";
import { TweetList } from "./componets/TweetList";
import { CreatTweet } from "./componets/CreatTweet";

function App() {
  const [name, setName] = useState("Ed");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "I want to slip"
  return (
    <div>
      <h1>Hello React</h1>
      <CreatTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
