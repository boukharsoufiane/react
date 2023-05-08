import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h2>GESTECH</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item mx-5 ">
        <Link className="nav-link active" aria-current="page"  to="/">Home</Link>

        </li>
        <li className="nav-item mx-5 ">
        <Link to="/tables" className="nav-link">History</Link>

        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header