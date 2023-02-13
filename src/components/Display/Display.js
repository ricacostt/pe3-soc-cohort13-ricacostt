import React, { useState, useEffect } from "react";
import { useGet } from "../Custom Hooks/UseGet";
import NewsList from "../NewsList/NewsList";
import SearchBar from "../SearchBar/SearchBar";

/**
 * fetch the data from the api through the useGet custom hook and display the results
 * @returns a search bar component znd the newsList components
 */
function Display() {
    //use state for the newsinfo card
  const [newsInfo, setNewsInfo] = useState([]);
  //us state to set the userinput and the search
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");
  //const [category, setCategory] = useState('general')
//create a variable of api key that is taken from the .env file
  const APIKEY = process.env.REACT_APP_APIKEY;
//fetch data
  const [response] = useGet(
    `https://gnews.io/api/v4/top-headlines?apikey=${APIKEY}&q=none&lang=en`
  );

//set newsInfo to the response from the fetch and wrap it in a use effect to avoid side effects
  useEffect(() => {
    setNewsInfo(response);
  }, [response]);

  /**
   * handle the user input in the text box area and set that to be whatever the user input transformed to lower case
   * @param {event} e - takes in an event
   */
  function handleUserInput(e) {
    setUserInput(e.target.value.toLowerCase());
  }

  /** handle the click of the user setting the search to be equal to what the user input in the input area and clearing the input after the button in clicked*/
  function handleClick() {
    setSearch(userInput);
    setUserInput("");
  }

  //call the function inside a useEffect to avoi side effects and set the dependencie 'search' as this function will run everytime the search change
  useEffect(() => {
    /**
     * it fetch from the api with the title parameter that change depends on what the user input in the input area
     * @param {string} title 
     */
    async function getNewsByTitle(title, category) {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?apikey=${APIKEY}&q=${title}&lang=en&category=${category}`
      ); 
      const data = await response.json();
      setNewsInfo(data.articles);
    }
    getNewsByTitle(search);
  }, [search, APIKEY]);


  return (
    <div>
      <SearchBar
        userInput={userInput}
        handleUserInput={handleUserInput}
        handleClick={handleClick}
      />
    
      <NewsList newsInfo={newsInfo} />
    </div>
  );
}

export default Display;
