import React from 'react'
import News from '../News/News';
import { v4 as uuidv4 } from 'uuid';

/**
 * 
 * @param {object} newsInfo 
 * @returns if the newsInfo exists it map throught the news and for each of them returns a news card
 */
function NewsList({newsInfo}) {
    return newsInfo ? (
        <>
          <div style={{  display: "flex",
  flexDirection: "column", justifyContent:'center', flexWrap:"wrap"}}>
<div style={{display:'flex', justifyContent:'center' }}>
        <h1>Top Headlines</h1>
        </div>
        <div style={{  display: "flex",
  flexDirection: "row", justifyContent:'center', flexWrap:"wrap"}}>
            {newsInfo.map((newsObj) => (
              <div style={{  display: "flex",
  flexDirection: "row", justifyContent:'center', flexWrap:"wrap" }}>
              <News newsObj={newsObj} key={uuidv4}/>
              </div>
            ))}
              </div>
          </div>
        </>
      ) : (
        ""
        );
      }
      
      export default NewsList