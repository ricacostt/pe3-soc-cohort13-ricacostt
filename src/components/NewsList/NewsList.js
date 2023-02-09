import React from 'react'
import News from '../News/News';

function NewsList({news}) {
    return news ? (
        <>
          <div>

            {news.map((newsObj) => (
              <News 

              title={newsObj.title}
                description={newsObj.description}
                image={newsObj.image}
                url={newsObj.url}
                publishedAt={newsObj.publishedAt}
              />
            ))}
          </div>
        </>
      ) : (
          ""
          );
        }

export default NewsList