
import { TweetList } from "./componets/TweetList";
import { CreatTweet } from "./componets/CreatTweet";

function App() {
  const name = "Ed"
  const message = "I want to slip"
  return (
    <div>
      <h1>Hello React</h1>
      <CreatTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
