import { useState } from "react";

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default function ExampleUpdateStateComplex() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  {/*
    1 Chamada para handleClick:
      - setPending(0 + 1); Gera uma nova renderização.
      - Espera 3 segundos.
      - setPending(ppending - 1); É errado, eu ja atualizei pending mas no contexto da função handleClick, pending ainda é 0. Por isso o correto é passar uma função para o setPending, pois o React irá chamar essa função com o valor atualizado de pending.
      - setPending(p => p - 1); 
      - setCompleted(c => c + 1);

      Renderiza novamente.
  */}
  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }
   return (
    <div>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </div>
   )
}