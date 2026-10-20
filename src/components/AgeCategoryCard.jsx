import React from 'react'
import { Link } from 'react-router-dom'

const AgeCategoryCard = ({ title, category }) => {
  return (
    <Link to={/shop?age=} className="age-category-card scrapbook-age-card">
      <div className="age-card-content">
        <h3 className="age-card-title">{title} ✿</h3>
        <p className="age-card-deco">♡ ₊‧</p>
      </div>
    </Link>
  )
}

export default AgeCategoryCard
