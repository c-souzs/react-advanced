import { useEffect, useState } from "react";

{/*
  Lembrar e atualizar!

  Utilizar variáveis simples nos componentes para informações que podem mudar de acordo com a interação do usuário com o componente não é o ideal. 
    - Porque elas são variáveis locais e não persistem entre as renderizações.
    - Porque elas também não acionam a renderização do componente quando são alteradas.

  Para isso, o useState fornece: 
    - Uma variável de estado que persiste entre as renderizações.
    - Uma função de estado setter que atualiza a variável de estado e aciona a renderização do componente.

  Cada componente tem seu estado isolado e privado. 

  O valor de uma variável de estado nunca muda em uma renderização.

  Como o React lida com fila de atualização de estado?
    - Em manipuladores de eventos, ele espera todo o código da função ser executado para acioanr uma nova renderização. Aqui, temos o exemplo do garçom, após o primeiro pedido, ele não sai correndo para a cozinha, ele espera todos os pedidos serem feitos para então ir para a cozinha.
    - Então, se em uma função manipuladora de eventos, eu atualizo vários estados diferentes, o React irá atualizar o componente apenas uma vez, pois ele espera todo o código ser executado para então atualizar o componente.

  Como forçar uma atualização de estado?
    - Utilizando a função de atualização do estado com uma função de callback, onde o primeiro parâmetro é o estado atual e o segundo é o valor que queremos atualizar.
    - O React cria fila dessas funções de atualização de estado e executa uma por uma, passando o estado atualizado para a próxima função.
*/}

export default function StateHook() {
  const [counter, setCounter] = useState(0);

  // Essa é uma função manipuladora de eventos de um formulário.
  // Nela, chamamos a função setCounter 3 vezes, porém, o valor de counter é atualizado apenas uma vez.
  // O React espera todo o código da função ser executado para atualizar o estado e renderizar o componente novamente.
  const increment = () => {
    // Esse grupo de chamadas que altera o estado é chamado, porém, no final, o estado é atualizado apenas uma vez, pois no momento que o React chama a função increment, o valor de counter ainda é 0.
    setCounter(n => n + 1); // 0 + 1 = 1
    setCounter(n => n + 1); // 0 + 1 = 1
    setCounter(n => n + 1); // 0 + 1 = 1

    // Aqui é o mesmo modo, no momento que a função de setTimeout é chamada, o valor de counter ainda é 0, pois ela é chamada no momento que a renderização de atualização ainda não ocorrru.
    setTimeout(() => {
      console.log("Counter: ", counter);
    }, 5000);
  }

  // Como o Recat irá lidar com essa função manipuladora de eventos?
  // Bom, antes de renderizar novamente o componente, ele irá executar todas as funções de atualização de estado que estão na fila.
  // Na primeira função, ele irá atualizar para 1, pois counter vale 0.
  // Na segunda função, ele irá atualizar para 21, pois ele executa a função de callback e passa o valor atualizado para a próxima função.
  // Na terceira função, ele irá substituir o valor de 21 por 58.
  const increment58 = () => {
    setCounter(counter + 1);
    setCounter(n => n + 20);
    setCounter(58);
  }

  const [walk, setWalk] = useState(true);

  function handleClick() {
    if(!walk) alert('Andar é o próximo');
    else alert('Parar é o próximo');

    setWalk(!walk);
  }

  useEffect(() => {
    console.log("DOM");
  }, []);

  console.log("RENDER");
  
  
  return (
    <div>
      <div>
        <span>{ counter }</span>
        <button onClick={() => increment()}>+3</button>
        <button onClick={() => increment58()}>+58</button>
      </div>
      <div>
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </div>
    </div>
  )
}