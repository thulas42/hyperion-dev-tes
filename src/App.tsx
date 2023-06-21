import React from 'react';
import logo from './logo.svg';
import './App.scss';
import * as Icon from 'react-bootstrap-icons';
import './custom.scss';

function App() {
  return (
    <div className="container" id="main-panel">
      <header className="p-3 mb-3">
      <div className="container">
  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
      <img src={require("./assets/images/url@3x.png")} alt="mdo" width="auto" height="20" />
    </a>
    <ul className="nav col-lg-auto ms-lg-4 me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2">Full Stack Web Developer Bootcamp</a></li>
    </ul>

    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"></form>

    <div className="dropdown text-end">
      <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" /> Profile
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">Edit profile...</a></li>
        <li><a className="dropdown-item" href="#">Logout</a></li>
      </ul>
    </div>
  </div>
</div>

  </header>
      <div className="row justify-content-center" >
        <div className="col-md-7">
        <div className="box shadow-lg shadow-none-sm p-lg-5">
            <div className="top py-lg-4 py-md-4">
              <img src={require("./assets/images/beginner-php-fundamentals@3x.png")} className="img-fluid rounded-start" alt="..." />
              <span>
                <h4 className='main-header mb-2 '>Web developemnt Bootcamp Trial</h4>
                <button className="btn btn-primary">Continue your trial</button>
              </span>
            </div>
            <hr></hr>
            <div className="bottom py-lg-2 py-md-2 mb-lg-4 mb-md-4">
              <p className='mx-auto'><b>Your progress</b>(1/4 complete)</p>
              <div className='sub-section'>
                <button className="btn btn-primary my-lg-1 me-lg-1 my-lg-1 me-lg-1 my-md-1 me-md-1 my-md-1 me-md-1">Industry knowledge 1 </button>
                <button className="btn btn-primary m-lg-1 m-md-1">Industry knowledge 2 <Icon.Check/> </button>
              </div>
              <div className='sub-section'>
                <button className="btn btn-primary my-lg-1 me-lg-1 my-lg-1 me-lg-1 my-md-1 me-md-1 my-md-1 me-md-1">HTML Basics </button>
                <button className="btn btn-primary m-lg-1 m-md-1">Your first PHP script </button>
              </div>
            </div>
          </div>
          <div className='px-lg-5 px-md-5 px-sm-5 py-4 py-md-4 py-sm-4 trial-section-header'>Trial another bootcamp</div>
          <div className='trial-section d-flex flex-wrap flex-md-nowrap'>
        <div className="card trial-section-card d-flex flex-grow-1 shadow shadow-lg-sm">
              <div className="row g-0">
                <div className="col-4">
                  <img src={require("./assets/images/layer-115@3x.png")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8">
                <div className="card-body shadow trial-section-card-body">
                    <h5 className="card-text">Mobile Developer Bootcamp</h5>
                  </div>
                </div>
              </div>
            </div>
        <div className="card trial-section-card d-flex flex-grow-1 shadow shadow-lg-sm">
              <div className="row g-0">
                <div className="col-4">
                  <img src={require("./assets/images/layer-114@3x.png")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8">
                  <div className="card-body shadow trial-section-card-body">
                    <h5 className="card-text ">Software Engineer Bootcamp</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-lg-5 p-lg-5 right">
          <div className="right-sub-header my-4">
            Your coding journey
          </div>
          <ul className='journey-list my-4'>
            <li className='journey-list-item'>Total program written</li>
            <li className='journey-list-item'>Total code reviews</li>
          </ul>
          <hr></hr>
          <div className="right-sub-header my-4">
            Get more information
          </div>
          <p className='mb-4'>We're ready to help with any question you may have about our Bootcamps and Mentor support</p>
          <button className="btn btn-primary me-2 my-2 d-block d-sm-inline-block">Book a call</button>
          <button className="btn btn-primary">Join an infor session</button>
          <hr></hr>
          <div className="right-sub-header my-4">
            Upgrade to the full bootcamp
          </div>
          <p className='mb-3'>Our next cohort starts 3 January 2018</p>

          <button className="btn btn-primary">Reserve your spot</button>
        </div>
      </div>
    </div>
  );
}

export default App;
