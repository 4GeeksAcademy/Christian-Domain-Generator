/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Any string");

  document.querySelector("#boton").onclick = () => {
    document.querySelector("#generador").innerHTML = `${
      resultadoFinal[Math.floor(Math.random() * resultadoFinal.length)]
    }`;
  };

  let pronombres = ["Nuestro", "El", "Mi"];
  let adjetivos = ["asombroso", "emocionante", "increíble"];
  let sustantivos = ["momento", "curso", "trabajo"];
  let dominios = [".com", ".es", ".gg", ".perdónporelretraso"];

  let resultadoFinal = [];

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        for (let dominio of dominios) {
          resultadoFinal.push(`${pronombre}${adjetivo}${sustantivo}${dominio}`);
        }
      }
    }
  }
};
