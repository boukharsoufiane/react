import React from 'react'
import './App.css'

const Expenses = (props) => {
  return (
    <>
    <div className='col'>
            <div className='card text-bg mb-3' style={{ maxWidth: '18rem' ,background:'#FF6384'}}>
              <div className='card-header'>Expenses</div>
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

export default Expenses