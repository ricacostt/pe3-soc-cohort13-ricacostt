import React,{useState, useEffect} from 'react'
import { useGet } from '../Custom Hooks/UseGet'
import NewsList from '../NewsList/NewsList'
import SearchBar from '../SearchBar/SearchBar'

function Display() {
    const [newsInfo, setNewsInfo] = useState([])
const [userInput, setUserInput] = useState("")
const [search, setSearch] = useState("")


    const apiKey = "580a3a2c27940ac65a90cb0b9d5dc683"

    const [response, error] = useGet(`https://gnews.io/api/v4/top-headlines?apikey=${apiKey}&q=none&lang=en`)


    useEffect(()=>{
        setNewsInfo(response)
    },[response])

  return (
    <div>
    <SearchBar/>
        <h1>TOP HEADLINES</h1>
        <NewsList newsInfo={newsInfo}/>
    </div>
  )
}

export default Display