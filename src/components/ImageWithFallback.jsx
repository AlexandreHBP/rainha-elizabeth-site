import React, { useState } from 'react'

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackIcon = '👑', 
  fallbackBg = 'bg-royal-gold',
  className = '',
  ...props 
}) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${fallbackBg} flex items-center justify-center text-6xl text-white ${className}`}>
        {fallbackIcon}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}

export default ImageWithFallback 