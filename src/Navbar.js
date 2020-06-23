import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="main-navbar"
        >
          {/* navbar brand and toggle button*/}

          <a className="navbar-brand" to="/">
            Pantoja
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navbar collapse */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <NavLink
                activeClassName="Navbar-active"
                className="nav-item nav-link"
                to="/"
              >
                Curriculum
              </NavLink>
              <NavLink
                activeClassName="Navbar-active"
                className="nav-item nav-link"
                to="/downloads"
              >
                Downloads
              </NavLink>

              {/* dropdowns */}

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Publicações
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/journals"
                  >
                    Journals
                  </NavLink>
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/conferencias"
                  >
                    Conferências
                  </NavLink>
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/livros"
                  >
                    Livros
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Colaboradores
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/parceiros"
                  >
                    Parceiros
                  </NavLink>
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/alunos"
                  >
                    Alunos
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Cursos
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/sistemas-estruturais"
                  >
                    Sistemas Estruturais
                  </NavLink>
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/patologia"
                  >
                    Patologia
                  </NavLink>
                  <NavLink
                    activeClassName="Navbar-active"
                    className="dropdown-item"
                    to="/reforco-estrutural"
                  >
                    Reforço Estrutural
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
