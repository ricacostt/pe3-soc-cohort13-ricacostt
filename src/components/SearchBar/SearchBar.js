import React from "react";

/**
 * 
 * @param {object} props 
 * @returns a search bar with an input box where is handled the user typing and a button where is handle the click of the user
 */
function SearchBar(props) {
    const {handleUserInput, handleClick, userInput} = props

  return (
<div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search by title…" className="input input-bordered" onChange={handleUserInput} value={userInput} />
    <button onClick={handleClick} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
   
  )
}

export default SearchBar