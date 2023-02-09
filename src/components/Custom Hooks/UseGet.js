import {useState , useEffect} from "react"
  
/**
 * useGet custom hook aim is to fetch data from the api to being able to display data and it sets the response to res.artcles (alias newsInfo), and set the error if it's not able to access the data
 * @param {string} url - this is defined both in the Display component allowing to fetch data from the database based on our queries
 * @returns a response and an error
 */
export function useGet(url) {

  const [response, setResponse] = useState('')
  const [error, setError] = useState("")
  
  useEffect(()=> {
      try {
          fetch(url, {
              header: {Accept: "application/json" },
          })
          .then((res)=> res.json())
          .then((res)=> setResponse(res.articles))
          .catch((err)=> setError(err));
          
      } catch (error) {
          
      }

  },[url])


  return [response, error]


}