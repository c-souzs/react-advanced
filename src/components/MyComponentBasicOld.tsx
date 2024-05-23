/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

type MyComponentProps = {
  title: string;
  fnClick: () => void;
}

{/*
  O ciclo de vida de um componente pode ser divido em 4 fases:
    - Iniciliazação
    - Montagem
    - Atualização
    - Desmontagem

  Inicilização:
    - Ela ocorre quando chamamos o construtor da classe que vai criar aquele objeto. Aqui, podemos configurar o estado inicial do componente e acessar as propriedades passadas para ele.
  
  Montagem:
    - Aqui, o componente é montado, criado e inserido no DOM. Nessa fase podemos usar métodos para acessar o componente antes dele ser montado e depois dele ser montado.

  Atualização:
    - É aqui que a rerenderização do componente ocorre, ou seja, os estados e propriedades do componente são atualizados.

  Desmontagem:
    - Aqui o componente é removido do DOM.
*/}

export default class MyComponentBasicOld extends React.Component {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    }
  }

  componentDidMount(): void {
    console.log("Componente montado no DOM.");
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("Componente atualizado.");
  }

  componentWillUnmount(): void {
    console.log("Componente desmontado do DOM.");
  }

  render(): React.ReactNode {
    const { title, fnClick } = this.props as MyComponentProps;
    
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={fnClick}>Clicked</button>
      </div>
    );
  }
}