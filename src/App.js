import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Labenu");

  const [automovel, setAutomovel] = useState({
    modelo: "Cors",
    cor: "branco",
    ano: 2020,
    adicionadoPor: nome,
    flex: true,
  });



  const gol3 = {
    modelo: "Gol",
    cor: "Preto",
    ano: 2010,
    adicionadoPor: nome,
    flex: false,
  };

  return (
    <div className="App">
      <GlobalStyled />
      <Garagem
        automovel={automovel}
        nomeGaragem={nome}
        setNome={setNome}
        setAutomovel={setAutomovel}
        carro={gol3}
      />
    </div>
  );
}
