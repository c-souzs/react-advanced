import Feed from "../components/Feed";
import MyComponentBasicAdvanced from "../components/MyComponentAdvanced";
import MyComponentBasic from "../components/MyComponentBasic";
import Profile from "../components/Profile";

{/*
  Componentes VS Elementos.

  Componentes são funções em React que retornam elementos JSX.
  Logo, percebemos que componentes são estruturados a partir de elementos JSX.

  Elementos são representações de um componente. Eles são a menor unidade de um componente. Logo, um componente é composto por um ou mais elementos.

  Componentes são imuáveis, já elementos são mutáveis. Ou seja, não podemos alterar o valor de uma propriedade diretamente dentro do próprio componente, mas podemos alterar o valor de um elemento diretamente.
*/}
export default function Components() {
  const myRefComponent = MyComponentBasic; // Referencia a função que cria o componente.
  const myComponent = <MyComponentBasic title="Componente básico 2" fnClick={() => console.log("Esse é um componente básico que recebe um título e uma função de clique! 2 ")}/>; // Chama a função que cria o componente.

  console.log("Referencia de um componente:", myRefComponent);
  console.log("Instancia de um componente:", myComponent);

  return (
    <div>
      <h1>Revisando e avaçando na criação de componentes.</h1>
      {/* Componentes são funções em React que retornam elementos JSX e podem ou não receber argumentos (propriedades). */}
      {/* 
        Quando passamos várias propriedade para um mesmo componente, o React faz com que esse componente receba todas elas dentro de um único objeto (props)
        Esses objetos são imutáveis, ou seja, não podemos alterar o valor de uma propriedade diretamente dentro do proóprio componente. 
      */}
      <MyComponentBasic title="Componente básico" fnClick={() => console.log("Esse é um componente básico que recebe um título e uma função de clique!")}/>
      {/* 
        Podemos passar componentes como filho de outros componentes. Geralmente usamos isso para contaneirs, listas, grids, etc.
      */}
      <Feed 
        posts={[
          { 
            id: 1, 
            title: "Meu primeiro post", 
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quidem, possimus dicta tempore fuga obcaecati quaerat similique vero beatae rem voluptate! Aliquam laborum animi illum qui dolores ullam autem ex." 
          },
        ]}
      >
        <Profile 
          alt="Imagem de perfil"
          image="https://avatars.githubusercontent.com/u/62879503?v=4"
          nameUser="Caio Souza"
          summary="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          complete="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quidem, possimus dicta tempore fuga obcaecati quaerat similique vero beatae rem voluptate! Aliquam laborum animi illum qui dolores ullam autem ex."
          fnChangeProfile={() => console.log("Mudando perfil.")}
          openProfile={true}
        />
      </Feed>        
      {/*
        Como componentes não podem alterar o valor de suas propriedades, chamamos esses componentes de componentes puros (funções puras). Além disso, eles recebem como argumento apenas um objeto (props) que contém todas as propriedades passadas para o componente.
        Então como podemos passar atributos que mudam de acordo com o estado do componente? Podemos usar estados para isso, pois o componente sera re renderizado, atualizando o valor das propriedades, mas não os alterando diretamente.
      */}
      <h2>Estruturando componentes da forma correta</h2>
      <MyComponentBasicAdvanced />
    </div>
  )
}