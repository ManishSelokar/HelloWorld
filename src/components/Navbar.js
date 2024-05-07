import React from 'react'
import PropTypes from 'prop-types'
import { redirect } from 'react-router-dom'


function Navbar(props) {
  const onLogout = () => {
    localStorage.removeItem('user')
    props.setLoginStatus(false)
    return redirect("login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/expenseentryitem">ExpenseEntryItem</a>
            </li>

            {props.loginStatus ? (
              <li className="nav-item">
                <button className="btn-warning" onClick={() => onLogout()} >LogOut</button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            )
            }
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here"
}

export default Navbar