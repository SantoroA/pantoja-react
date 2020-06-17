import React, { Component } from "react";
import foto from "./imgs/foto.jpg";
import lattes from "./imgs/lattes2.png";
import "./Curriculum.css";

class Curriculum extends Component {
  render() {
    return (
      <div className="content-wrapper Curriculum mt-5 p-5">
        <div className="container">
          <div className="bio row m-sm-5 align-items-center justify-content-center">
            <div className="col-md-4 mb-md-0 mb-4">
              <img className="bioPhoto" src={foto} alt="João Pantoja" />
            </div>
            <div className="col-md-8">
              <h2>João da Costa Pantoja</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus fugiat numquam ipsum. Inventore non dignissimos facere
                corrupti quae repellendus cumque. Voluptatum quidem mollitia
                alias quo voluptatibus fuga, exercitationem natus ex.
              </p>
              <div className="links align-items-center justify-content-center">
                <a
                  className="p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100014034870183"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  className="p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jo%C3%A3o-pantoja-b940a418/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.researchgate.net/profile/Joao_Pantoja2"
                >
                  <i className="fab fa-researchgate"></i>
                </a>
                <a
                  className="p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://lattes.cnpq.br/6879105340639188"
                >
                  <img className="lattesImage" src={lattes} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Curriculum;
