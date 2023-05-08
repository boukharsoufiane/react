import React from 'react'
import './App.css'

const CurrentBalance = (props) => {

  return (
   
    <>
    <div className='col'>
            <div className='card text mb-3' style={{ maxWidth: '18rem',background:'#FFCE56'}}>
              <div className='card-header'>Current Balance</div>
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

export default CurrentBalance