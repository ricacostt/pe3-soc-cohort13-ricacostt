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
          <div>

            {newsInfo.map((newsObj) => (
              <div>
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