import React, { Component } from "react";
export default class Filter extends Component {
  state = {
    pessoas: [
      { nome: "Luiz", idade: 19 },
      { nome: "Raquel", idade: 22 },
      { nome: "Daniel", idade: 16 },
      { nome: "Gabriele", idade: 22 },
      { nome: "Adamastor", idade: 55 }
    ],
    deMaior: []
  };
  maiores = () => {
    this.setState({
      deMaior: this.state.pessoas.filter((element) => {
        return element.idade > 18;
      })
    });
  };
  render() {
    return (
      <>
        <h2> Vamos fazer um filtro de idade </h2>
        <div>
          {this.state.pessoas.map((item) => (
            <ul>
              <li> Meu nome é {item.nome}</li>
              <li> e tenho anos {item.idade} de idade</li>
            </ul>
          ))}
        </div>
        <h2>Apenas os Maiores passarão</h2>
        <button onClick={this.maiores}>Filtrar</button>
        <div>
          {this.state.deMaior.map((item) => (
            <ul>
              <li>meu nome é {item.nome}</li>
              <li> tenho anos {item.idade} de idade </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
