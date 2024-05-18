type MyComponentProps = {
  title: string;
  fnClick: () => void;
}

// Componentes são imutáveis, ou seja, não podemos alterar o valor de uma propriedade diretamente dentro do próprio componente.
// Como componentes não podem alterar o valor de suas propriedades e nem o valor de variaveis fora do seu escopo, chamamos esses componentes de componentes puros (funções puras).
export default function MyComponentBasic({ title, fnClick}: MyComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => fnClick()}>Clicked</button>
    </div>
  )
}