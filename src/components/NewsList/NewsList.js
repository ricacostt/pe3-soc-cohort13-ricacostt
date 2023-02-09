import React from 'react'
import News from '../News/News';

/**
 * 
 * @param {object} newsInfo 
 * @returns if the newsInfo exists it map throught the news and for each of them returns a news card
 */
function NewsList({newsInfo}) {
    return newsInfo ? (
        <>
          <div style={{  display: "flex",
  flexDirection: "row", justifyContent:'center', flexWrap:"wrap" }}>

            {newsInfo.map((newsObj) => (
              <div style={{  display: "flex",
  flexDirection: "row", justifyContent:'center', flexWrap:"wrap" }}>
              <News newsObj={newsObj} key={newsObj.url}/>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
        );
      }
      
      export default NewsList