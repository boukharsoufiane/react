import App from './App'
import DataTable from './History'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function Result () {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<App />} />
          <Route path='/tables'  element={<DataTable />} />
        </Routes>
      </Router>
    </>
  )
}

export default Result
