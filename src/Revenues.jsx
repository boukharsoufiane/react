import React from 'react'
import './App.css'

const Revenues = (props) => {
  return (
    <>
    <div className='col'>
            <div
              className='card text-bg-info mb-3'
              style={{ maxWidth: '18rem' }} >
              <div className='card-header'>Revenues</div>
              <div className='card-body'>
                <p className='card-text'>
                  {props.price} DH
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Revenues