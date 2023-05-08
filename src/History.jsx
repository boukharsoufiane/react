import Header from './header';
import { useState, useEffect } from 'react';

function DataTable() {
   // recuper les donnee on localstorage
   const [formData] = useState(() => {
    const storedData = localStorage.getItem('formData')
    return storedData ? JSON.parse(storedData) : []
  })
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])


  return (
    <>
    <Header/>
    

    <table className='table container'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Type</th>
            <th scope='col'>Category</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            <th scope='col'>Comment</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <th scope='row'>
                {data.type === 'Expenses' ? (
                  <i className='fa-solid fa-arrow-down text-danger'></i>
                ) : (
                  <i className='fa-solid fa-arrow-up text-success'></i>
                )}
              </th>
              <td>{data.type}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
              <td>{data.date}</td>
              <td>{data.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;
