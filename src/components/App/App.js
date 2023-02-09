import React,{useState, useEffect} from 'react';
import NewsList from '../NewsList/NewsList';
// import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
  const [newsInfo, setNewsInfo] = useState(null);
  // const [error, setError] = useState("")
  // const [userInput, setUserInput] = useState("");
  // const [search, setSearch] = useState("");

const apiKey = "580a3a2c27940ac65a90cb0b9d5dc683"

async function getTopHeadlines(){
  const response = await fetch(`https://gnews.io/api/v4/top-headlines?apikey=${apiKey}&q=none&lang=en`)
  const data = await response.json()
 let articles = data.articles
  setNewsInfo(articles)

  // for (let i = 0; i < articles.length; i++) {
  //   // articles[i].title
  //   console.log("Title: " + articles[i]['title']);
  //   // articles[i].description
  //   console.log("Description: " + articles[i]['description']);
  //   break;
  // }
}
useEffect(()=>{
  getTopHeadlines()
  setNewsInfo()
}, [])



// async function getNewsInfo(title, category){
//   const response = await fetch(`https://gnews.io/api/v4/top-headlines?apikey=${apiKey}&q=${title}&lang=en`)
//   const data = await response.json()
//   setNewsInfo(data.articles);
//   console.log(data.articles)

//   setError(`No result found for ${title}, please make another search`)
// }
// useEffect(()=> {
//   getNewsInfo(search)
// }, [search])

// function handleUserInput(e){
//   setUserInput(e.target.value.toLowerCase())
// }
// function handleClick(){
//   setSearch(userInput)
//   setUserInput("")
// }
// if (newsInfo === null){
//   return <p>Please wait</p>
// }
  return newsInfo && (
    <div className="App-header">
  <ul>{newsInfo.map(news=>
  <li key={news.title}>{newsInfo.tile}</li>)}
  </ul>
  {/* <h2>{newsInfo.title}</h2>
  <p>{newsInfo.description}</p> */}
  {/* <SearchBar userInput={userInput} handleUserInput={handleUserInput} handleClick={handleClick}/> */}
<NewsList newsInfo={newsInfo}/>
    </div>
)}

export default App;
