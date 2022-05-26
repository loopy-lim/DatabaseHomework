import React from "react";
import {BsTwitter, BsInstagram, BsFacebook} from "react-icons/bs";

function Foot () {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items center py-3 my-4 border-top container">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img src="/src/assets/images/Logo.svg" alt="Juggle" />
            <span className="mb-3 mb-md-0 text-muted">© 2022 Miracle Company, Inc</span>
          </a>  
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="#" className="text-muted">
                <svg className="bi" width="24" height="24">
                  <BsTwitter/>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-muted">
                <svg className="bi" width="24" height="24">
                  <BsInstagram/>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-muted">
                <svg className="bi" width="24" height="24">
                  <BsFacebook/>
                </svg>
              </a>
            </li>
          </ul>
    </footer>
  );
}

export default Foot;