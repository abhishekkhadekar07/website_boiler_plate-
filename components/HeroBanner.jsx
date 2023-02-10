import Link from 'next/link'
import React from 'react'

function HeroBanner() {
  return (
    <>
    <div className='hero-banner-container'>
      <p className='beats-solo'> 
    small text
        </p>
        <h3> MID text</h3>
        <img src='' alt='headphones' className='hero-banner-image' />
        <div>
          <Link href='/product/ID'>
            <button type="button">Button text</button>
          </Link>
            <div className='desc'>
              <h3>Description</h3>
              <p>Description</p>
            </div>
        </div>
      </div>
      </>
  )
}

export default HeroBanner
