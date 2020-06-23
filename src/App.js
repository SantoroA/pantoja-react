import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Curriculum from "./Curriculum";
import Journals from "./Journals";
import Conferencias from "./Conferencias";
import Downloads from "./Downloads";
import Livros from "./Livros";
import Parceiros from "./Parceiros";
import Alunos from "./Alunos";
import ReforcoEstrutural from "./ReforcoEstrutural";
import Patologia from "./Patologia";
import SistemasEstruturais from "./SistemasEstruturais";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Curriculum} />
        <Route exact path="/journals" component={Journals} />
        <Route exact path="/conferencias" component={Conferencias} />
        <Route exact path="/downloads" component={Downloads} />
        <Route exact path="/livros" component={Livros} />
        <Route exact path="/parceiros" component={Parceiros} />
        <Route exact path="/alunos" component={Alunos} />
        <Route exact path="/reforco-estrutural" component={ReforcoEstrutural} />
        <Route exact path="/patologia" component={Patologia} />
        <Route
          exact
          path="/sistemas-estruturais"
          component={SistemasEstruturais}
        />
      </Switch>
    </>
  );
}

export default App;
