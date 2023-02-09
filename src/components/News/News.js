import React from 'react'

function News({title, description}) {
  return (
    // <div className="card w-96 bg-base-100 shadow-xl">
    //       <figure><img src={newsInfo.image} alt="Shoes" /></figure>
    //       <div className="card-body">
    //         <h2 className="card-title">
    //           {newsInfo.title}
    //          <div className="badge badge-secondary">{newsInfo.publishedAt}</div>
    //         </h2>
    //         <p>{newsInfo.description}</p>
    //         <div className="card-actions justify-end">
    //           <div className="badge badge-outline">{newsInfo.url}</div> 
    //         </div>
    //       </div>
    //     </div>
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default News