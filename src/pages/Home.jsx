import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import AgeCategoryCard from '../components/AgeCategoryCard'
import ChickenCard from '../components/ChickenCard'
import chickens from '../data/chickens'

const Home = () => {
  const featured = chickens.slice(0, 4)

  return (
    <div className="home">
      <Hero />
      <section className="featured-section scrapbook-section">
        <div className="container">
          <h2 className="section-title">OUR LITTLE FEATHERED STARS ♡</h2>
          <div className="featured-grid">
            {featured.map((chicken) => (
              <ChickenCard key={chicken.id} chicken={chicken} />
            ))}
          </div>
        </div>
      </section>
      <section className="age-categories-section scrapbook-section">
        <div className="container">
          <h2 className="section-title">SHOP BY CHICKEN AGE ✿</h2>
          <div className="age-categories-grid">
            <AgeCategoryCard title="4-MONTH-OLD CHICKENS" category="4-month" />
            <AgeCategoryCard title="5-MONTH-OLD CHICKENS" category="5-month" />
            <AgeCategoryCard title="6-MONTH-OLD CHICKENS AND OLDER" category="6-plus" />
          </div>
        </div>
      </section>
      <section className="about-preview-section scrapbook-section">
        <div className="container">
          <h2 className="section-title">A LITTLE ABOUT CHICKEN NI DODONG ♡</h2>
          <p className="about-preview-text">
            Explore a variety of chicken breeds for farming, egg production, meat production, and ornamental purposes.
          </p>
          <Link to="/about" className="btn btn-primary">LEARN MORE</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
