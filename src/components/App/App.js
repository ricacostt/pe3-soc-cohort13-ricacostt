import React,{useState, useEffect} from 'react';
import Display from '../Display/Display';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Footer from '../Footer/Footer';
//import { useGet } from '../Custom Hooks/UseGet';

/**
 * 
 * @returns the components that will appear on the UI
 */
function App() {
  const APIKEY = process.env.REACT_APP_APIKEY;
  const [newsData, setNewsData] = useState([])
  const [category, setCategory] = useState('general')

  
  async function getTopNewsCategory(category){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?apikey=${APIKEY}&q=none&lang=en&category=${category}`)
    const data = await response.json()
    setNewsData(data.articles)
  }
  useEffect(()=>{
    getTopNewsCategory('category', setCategory)  

  }, [])

  return (
    <>
    <div> <NavBar newsData={newsData} getTopNewsCategory={getTopNewsCategory}/></div>
  
    <div className='App-header'>
      <Display/>
    </div>
    <Footer/>
    </>
  )
}

export default App