import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();

    this.props.handleChange(e.target.name);
  }
  render() {
    return (
      <div className="Navbar">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="main-navbar"
        >
          {/* navbar brand and toggle button*/}

          <a className="navbar-brand" href="/">
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
              <a
                className="nav-item nav-link"
                onClick={this.handleClick}
                href="/"
                name="Curriculum"
              >
                Curriculum
              </a>
              <a
                className="nav-item nav-link"
                onClick={this.handleClick}
                href="/"
                name="Downloads"
              >
                Downloads
              </a>

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
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Journals"
                  >
                    Journals
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Conferências"
                  >
                    Conferências
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Livros"
                  >
                    Livros
                  </a>
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
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Parceiros"
                  >
                    Parceiros
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Alunos"
                  >
                    Alunos
                  </a>
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
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Sistemas Estruturais"
                  >
                    Sistemas Estruturais
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Patologia"
                  >
                    Patologia
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={this.handleClick}
                    href="/"
                    name="Reforço"
                  >
                    Reforço
                  </a>
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
