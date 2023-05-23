import { CarroContainer } from './styles'

export function Carro({ modelo, cor, ano, flex, adicionadoPor,setAutomovel,carro }) {
  
  const alterarCarro = () =>{
    setAutomovel(carro)
}
  return (


    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>

      <button onClick={alterarCarro}>Alterar carro</button>
    </CarroContainer>
  )
}
