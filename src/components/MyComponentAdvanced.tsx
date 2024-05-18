{/*
    Passos para estruturar de forma mais efienciente um componente:
      - Criar apenas a estrutura HTML.
      - Criar os estilos, seguindo a estrturura HTML.
      - Criar states, se necessário.
      - Criar funções, se necessário.
      - Tratar eventos, se necessário.
      - Organizar o useEffect, se necessário.
    Dicas:
     - Sabemos que os componentes no React são sempre funções puras, ou seja, não podem alterar o valor de suas propriedades e nem o valor de variaveis fora do seu escopo.
      Mas como podemos alterar valores criados dentro de um escopo de um componente? Simples, basta esse valor ser um estado ou uma variavel declarada dentro do escopo do componente.
      E como devemos fazer essa alteração? Essas alterações são chamadas de efeitos colaterais e geralmente pertecem a manipuladores de eventos, como o onClick, onChange, onSubmit, etc. Essas funções não são puras!
      Então, para atualizar o valor de um estado ou de uma variavel dentro de um componente, devemos usar esses manipuladores de eventos. No último caso, se não conseguirmos encontrar uma solução, podemos usar o hook useEffect.
*/}
export default function MyComponentBasicAdvanced() {
  return (
    <div>
      <h1>Olá!</h1>
    </div>
  )
}