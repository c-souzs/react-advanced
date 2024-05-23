import React, { useEffect } from "react";

{/*
  O ciclo de vida de um componente pode ser divido em 4 fases:
    - Iniciliazação
    - Montagem
    - Atualização
    - Desmontagem

  Todos os métodos de ciclo de vida de um componente de classe podem ser utilizados em um componente funcional através do hook useEffect e no próprio corpo da função.

  - Inicialização:
    Se mantém no corpo da função, onde podemos configurar o estado inicial do componente e acessar as propriedades passadas para ele.

  - Montagem:
    - No corpo do componente, podemos manipular o componente antes dele ser montado na DOM, nessa fase o React apenas o renderizou, instanciou.
    - Já com o useEffect, podemos manipular o componente depois dele ser montado na DOM, ou seja, o React já renderizou, instanciou e montou o componente na DOM.

  - Atualização:
    - Ocorre a rerenderização do componente, ou seja, os estados e propriedades do componente são atualizados.

  - Desmontagem:
    - O componente é removido do DOM.
*/}
export default function EffectHook() {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    console.log("Componente montado no DOM.");

    return () => {
      console.log("Componente desmontado do DOM.");
    }
  }, [])

  useEffect(() => {
    console.log("Componente atualizado.");
  }, [counter])

  console.log("Renderizou");

  return (
    <div>
      <span>{ counter }</span>
      <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
    </div>
  )
}