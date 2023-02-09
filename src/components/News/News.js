import React from 'react'

function News({newsObj}) {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={newsObj.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {newsObj.title}
             <div className="badge badge-secondary">{newsObj.publishedAt}</div>
            </h2>
            <p>{newsObj.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{newsObj.url}</div> 
            </div>
          </div>
        </div>
    <div>
    </div>
    </>
  )
}

export default News