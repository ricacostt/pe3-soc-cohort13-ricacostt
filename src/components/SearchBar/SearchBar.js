import React from "react";


function SearchBar(props) {
    const {handleUserInput, handleClick, userInput} = props

  return (
    <div>
    <form>
        <input className='newsSearch' onChange={handleUserInput} value={userInput} placeholder="search by title"> 
    </input><button onClick={handleClick}>Discover</button>
        </form>
       
    </div>
  )
}

export default SearchBar