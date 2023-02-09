import React from 'react'
import News from '../News/News';

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