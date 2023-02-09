import React from 'react'

/**
 * 
 * @param {object} newsObj - the object containing all the info for each news
 * @returns a card with an image, title, url to visit the website, description, date and time of publication
 */
function News({newsObj}) {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={newsObj.image} alt="news subjects" /></figure>
          <div className="card-body">
            <a  href={newsObj.url} target="_blank" className="card-title link link-secondary">
              {newsObj.title}
            </a>
            <p style={{fontSize: "1rem"}}>{newsObj.description}</p>
            <div className="card-actions justify-end">
              {/* <div className="badge badge-outline">{newsObj.url}</div>  */}
             <div className="badge badge-secondary">Date: {newsObj.publishedAt.slice(0,10)}</div>
             <div className="badge badge-secondary">Time: {newsObj.publishedAt.slice(11,19)}</div>
            </div>
          </div>
        </div>
    <div>
    </div>
    </>
  )
}

export default News