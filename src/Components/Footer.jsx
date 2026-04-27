import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy;{new Date(). getFullYear()} Cycle Tracker. All Rights</p>
    </div>
  )
}

export default Footer
