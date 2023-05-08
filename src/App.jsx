import React from 'react'
import Expenses from './Expenses'
import Revenues from './Revenues'
import CurrentBalance from './CurrentBalance'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './header'
import data from './finance.jpg'
import ChartComponent from './statique';


const App = () => {

  // Edit category
  const [categoryToAdd, setCategoryToAdd] = useState('')
  const [categories, setCategories] = useState([
    'Food',
    'Shooping',
    'Car',
    'Haus'
  ])

  const addCategorys = event => {
    event.preventDefault()
    setCategories([...categories, categoryToAdd])
    setCategoryToAdd('')
  }

  const deleteCategory = index => {
    setCategories(categories.filter((category, i) => i !== index))
  }

  // Balance state
  const [currentBalance, setactuel] = useState(0)
  const [expenses, setdepences] = useState(0)
  const [revenues, setrevenus] = useState(0)

  // value of form
  const [formValues, setFormValues] = useState({
    type: '',
    amount: '',
    category: '',
    reason: '',
    date: new Date().toLocaleDateString()
  })

  //Change value of the form
  const handleInputChange = event => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }






  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData')
    return storedData ? JSON.parse(storedData) : []
  })

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const newData = { ...formValues };
    setFormValues({
      type: '',
      amount: '',
      category: '',
      reason: '',
      date: new Date().toLocaleDateString()
    });
    // Save the form data to local storage
    const storedData = localStorage.getItem('formData');
    const existingData = storedData ? JSON.parse(storedData) : [];
    localStorage.setItem('formData', JSON.stringify([...existingData, newData]));
    setFormData([...existingData, newData]); // update formData with the new data
    setFormSubmitted(true); // set formSubmitted to true after submitting the form
  }

  useEffect(() => {
    if (formSubmitted) {
      setFormSubmitted(false); // reset formSubmitted to false
      // update the state of the component here, e.g. fetch the updated data
      // and set it to formData
      const updatedData = localStorage.getItem('formData')
      setFormData(updatedData ? JSON.parse(updatedData) : [])
    }
  }, [formSubmitted]);

















  // add valu to details
  useEffect(() => {
    let totalDepences = 0
    let totalRevenus = 0
    formData.forEach(data => {
      if (data.type === 'Expenses') {
        totalDepences += parseInt(data.amount)
      } else if (data.type === 'Revenues') {
        totalRevenus += parseInt(data.amount)
      }
    })
    setdepences(totalDepences)
    setrevenus(totalRevenus)
    setactuel(totalRevenus - totalDepences)
  }, [formData])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])




  return (
    <>
      <Header />
      <div id='img'>
        <img src={data} alt="" />

        <div
          className='modal fade'
          id='exampleModalToggle'
          aria-hidden='true'
          aria-labelledby='exampleModalToggleLabel'
          tabIndex='-1'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalToggleLabel'>
                  Process
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body' id='process'>
                <div>
                  <select
                    name='type'
                    value={formValues.type}
                    onChange={handleInputChange}
                  >
                    <option value=''>Select Type </option>
                    <option value='Expenses'>Expenses</option>
                    <option value='Revenues'>Revenues</option>
                  </select>
                </div>
                <div>
                  <input
                    type='number'
                    name='amount'
                    value={formValues.amount}
                    onChange={handleInputChange} placeholder='Amount'
                  />
                </div>
                <div>
                  <select
                    name='category'
                    value={formValues.category}
                    onChange={handleInputChange}
                  >
                    <option value=''>Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name='reason'
                    value={formValues.reason}
                    onChange={handleInputChange} placeholder='Reason'
                  ></textarea>
                </div>
                <button type='button' onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className='btn btn-primary ' id='btn'
          data-bs-target='#exampleModalToggle'
          data-bs-toggle='modal'
        >
          Update
        </button>


        <button className='btn btn-primary ' data-bs-target='#category'
          data-bs-toggle='modal' id='btnCategory'>
          Category Process
        </button>

        <div class="modal fade" id="category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Category Process</h5>
                <button type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'>
                </button>
              </div>
              <div class="modal-body">
                <h4 style={{marginTop:'2%'}}>List of Category</h4>
                <div>
                  {categories.map((category, i) => (
                    <div key={i}>

                      <div style={{border:'none',textAlign:'center',backgroundColor:'rgb(160, 255, 113)'}}>
                        {category}
                      </div>


                      <div>
                        <button style={{backgroundColor:'red',color:'#fff',padding:'5px',width:'100%',height:'7vh'}} onClick={() => deleteCategory(i)}>Delete</button>
                      </div>

                    </div>
                  ))}
                  <h4 style={{marginTop:'2%'}}>Add Category Process</h4>


                  <form onSubmit={addCategorys}>
                    <input
                      type='text'
                      value={categoryToAdd}
                      onChange={event => setCategoryToAdd(event.target.value)} placeholder='Type of Category' style={{width:'100%',marginLeft:'0%'}}
                    />
                    <button style={{backgroundColor:'rgb(160, 255, 113)',padding:'12px',width:'100%'}} type='submit'>Add Category</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='container text-center' style={{ marginTop: '5%' }}>
        <div className='row align-items-start'>
          <Expenses price={expenses} />
          <Revenues price={revenues} />
          <CurrentBalance price={currentBalance} />
        </div>
      </div>

      <div id='sts'>
        <div id='statique'>
          <ChartComponent
            expenseValue={expenses}
            revenueValue={revenues}
            soldActualValue={currentBalance}
          />
        </div>

      </div>

    </>
  )
}
export default App
