import React, { useState } from 'react'

const ChickenImage = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (!failed) {
      setFailed(true)
      // Try alternative path from src/assets
      const assetPath = src.startsWith('/') ? src.substring(1) : src
      // Try common alternatives
      setImgSrc(src)
    }
  }

  if (failed) {
    return (
      <div className={chicken-image-wrapper }>
        <div className="chicken-image-fallback">
          <span className="fallback-icon">🐔</span>
          <span className="fallback-text">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={chicken-image-wrapper }>
      <img
        src={imgSrc}
        alt={alt}
        className="chicken-image"
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  )
}

export default ChickenImage
