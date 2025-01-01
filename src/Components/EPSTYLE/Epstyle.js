import React from 'react'
import './Epstyle.css'
import Epstyle1 from './Epstyle1'

function Epstyle() {
  return (
    <>
        <h1 className='h2' style={{fontSize: '60px', textTransform: 'uppercase'}}>Epstyle af</h1>
        <h2 className='h2'>Epstyle heading 2</h2>
        <Epstyle1 />
    </>
  )
}

export default Epstyle