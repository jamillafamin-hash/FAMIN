import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ChickenCard from '../components/ChickenCard'
import chickens, { formatPrice } from '../data/chickens'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const ageFilterFromUrl = searchParams.get('age')

  const [searchTerm, setSearchTerm] = useState('')
  const [originFilter, setOriginFilter] = useState('')
  const [ageFilter, setAgeFilter] = useState(ageFilterFromUrl || '')
  const [availabilityFilter, setAvailabilityFilter] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [priceRange, setPriceRange] = useState([1, 30])

  useEffect(() => {
    if (ageFilterFromUrl) {
      setAgeFilter(ageFilterFromUrl)
    }
  }, [ageFilterFromUrl])

  const filteredChickens = chickens.filter((chicken) => {
    const matchesSearch = chicken.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesOrigin = originFilter ? chicken.origin.toLowerCase().includes(originFilter.toLowerCase()) : true
    let matchesAge = true
    if (ageFilter === '4-month') matchesAge = chicken.ageMonths === 4
    else if (ageFilter === '5-month') matchesAge = chicken.ageMonths === 5
    else if (ageFilter === '6-plus') matchesAge = chicken.ageMonths >= 6
    const matchesAvailability = availabilityFilter ? chicken.availability.toLowerCase().includes(availabilityFilter.toLowerCase()) : true
    const matchesPrice = chicken.priceMin >= priceRange[0] && chicken.priceMax <= priceRange[1]
    return matchesSearch && matchesOrigin && matchesAge && matchesAvailability && matchesPrice
  })

  if (sortBy === 'name') {
    filteredChickens.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === 'priceMin') {
    filteredChickens.sort((a, b) => a.priceMin - b.priceMin)
  } else if (sortBy === 'priceMax') {
    filteredChickens.sort((a, b) => a.priceMax - b.priceMax)
  }

  const resetFilters = () => {
    setSearchTerm('')
    setOriginFilter('')
    setAgeFilter('')
    setAvailabilityFilter('')
    setSortBy('')
    setPriceRange([1, 30])
  }

  const origins = [...new Set(chickens.map((c) => c.origin))]

  return (
    <div className="shop-page scrapbook-section">
      <div className="container">
        <h1 className="section-title">Shop Chickens ♡</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Search by breed name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Search by origin..."
            value={originFilter}
            onChange={(e) => setOriginFilter(e.target.value)}
            className="filter-input"
          />
          <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} className="filter-select">
            <option value="">All Ages</option>
            <option value="4-month">4-month-old</option>
            <option value="5-month">5-month-old</option>
            <option value="6-plus">6 months or older</option>
          </select>
          <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)} className="filter-select">
            <option value="">All Availability</option>
            <option value="in stock">In stock</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="priceMin">Min Price</option>
            <option value="priceMax">Max Price</option>
          </select>
          <button onClick={resetFilters} className="btn btn-outline">
            Reset Filters
          </button>
        </div>
        {filteredChickens.length === 0 ? (
          <p className="no-results">No chickens found matching your filters. Try again!</p>
        ) : (
          <div className="shop-grid">
            {filteredChickens.map((chicken) => (
              <ChickenCard key={chicken.id} chicken={chicken} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop
