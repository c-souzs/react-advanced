{/*
  Resumindo até aqui:
    - Sabemos o básico sobre o React:
      - Ele utiliza uma árvore de elementos em memória para renderizar os componentes, chamada de Virtual DOM, para depois atualizar a DOM real.
      - Cada componente ocupa uma posição, um nó, nessa árvore.
      - Rerenderizações são acionadas quando o estado, propriedades de um componente são atualizados ou sua posição na árvore é alterada.

  Renderização é o React chamando seus componentes para renderizar a árvore de elementos em memória, a Virtual DOM, e depois atualizar a DOM real.

  Processo de renderização do React:

  - Aciona a renderização:
    - O React utiliza o código contido no arquivo main.tsx para renderizar a aplicação. Utilizando o createRoot e o método render do React DOM.
    - Após isso, para acionar novas renderizações basta atualizar o estado de um componente ou suas propriedades.

  - Renderiza os componentes:
    - O React irá chamar o componente que teve seu estado ou propriedades atualizadas, e ira calcular quais propriedades, se houver, foram alteradas.
    - Durante esse processo, o React ira renderizar os componentes do nó alterado e seus filhos, de forma recursiva.

  - Confirma as alterações:
    - Aqui o React irá comparar a árvore de elementos em memória, a Virtual DOM, com a DOM real, usando o algoritmo de reconciliação.

  O processo de Reconciliation:
    - Utiliza o modo simultaneo para permitir que o React trabalhe com várias atualizações ao mesmo tempo, sem bloquear a thread principal.
    - Ele divide o trabalho em unidades menores, chamadas "fibras" e as prioriza com base em sua importância. Isso permite o React interromper o trabalho de uma fibra e continuar com outra, sem bloquear a thread principal.

    - Etapa 1:
      Na fase de renderização, o React atravessa a árvore de componentes, criando ou atualizando as fibras. Ele determina quais componentes precisam ser renderizados e cria uma lista de prioridades com base na urgência de suas atualizações.

    - Etapa 2:
      Confirmação, o React aplica as alterações ao DOM real. Essa fase também é dividida em vários níveis de prioridade, permitindo que o React priorize atualizações críticas e responda às interações do usuário sem comprometer o desempenho.

  Mas como o React lida com vários estados e propriedades de vários componentes, e como ele decide o que deve ser atualizado na DOM real? 
  Uma aplicação que tenha muitos componentes, muitos estados e muitas propriedades, como o React lida com isso?
*/}
export default function Reconciliation() {
  return (
    <div>
      Reconciliation
    </div>
  )
}