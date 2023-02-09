import React from 'react'
import './News.css'

/**
 * 
 * @param {object} newsObj - the object containing all the info for each news
 * @returns a card with an image, title, url to visit the website, description, date and time of publication
 */
function News({newsObj}) {
  return (
  
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={newsObj.image} alt="news objects" />
    </div>
    <div class="card-body">
      <a  href={newsObj.url} className="card-title link link-secondary">
          {newsObj.title}
        </a>
      <p>
       {newsObj.description}
      </p>
      <span class="tag tag-teal">Date: {newsObj.publishedAt.slice(0,10)}</span>
      <span class="tag tag-teal">Time: {newsObj.publishedAt.slice(11,19)}</span>
      
      
    </div>
  </div>
  </div>
  )
}

export default News