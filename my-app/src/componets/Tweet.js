import React from "react";

export const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter(state => state.id !== tweet.id));
  }
  return (
    <>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delet</button>
      <button>Like</button>
    </>
  );
};