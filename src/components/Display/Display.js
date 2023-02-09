import React,{useState, useEffect} from 'react'
import { useGet } from '../Custom Hooks/UseGet'
import NewsList from '../NewsList/NewsList'
import SearchBar from '../SearchBar/SearchBar'

function Display() {
    const [newsInfo, setNewsInfo] = useState([])
const [userInput, setUserInput] = useState("")
const [search, setSearch] = useState("")


    const REACT_APP_APIKEY = "c0809fdae899b76d4a65482cae02505b"

    const [response] = useGet(`https://gnews.io/api/v4/top-headlines?apikey=${REACT_APP_APIKEY}&q=none&lang=en`)


    useEffect(()=>{
        setNewsInfo(response)
    },[response])

function handleUserInput(e){
    setUserInput(e.target.value.toLowerCase())
}

function handleClick(){
    setSearch(userInput)
    setUserInput("")
}
    useEffect(()=>{
        getNewsByTitle(search)
    },[search])

    async function getNewsByTitle(title){
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?apikey=${REACT_APP_APIKEY}&q=${title}&lang=en`)
        const data = await response.json()
        setNewsInfo(data.articles)
    }

  return (
    <div>
    <SearchBar userInput={userInput} handleUserInput={handleUserInput} handleClick={handleClick}/>
        <h1 className='text-2xl'>TOP HEADLINES</h1>
        <NewsList newsInfo={newsInfo}/>
    </div>
  )
}

export default Display