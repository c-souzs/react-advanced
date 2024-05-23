// Arvore de elementos
{/*
  Para entender o processo de renderização, podemos imaginar que a nossa aplicação React é um grande objeto JavaScript que representa a árvore de elementos do DOM.
  Mas antes, vamos entender o conceito de componente pai (no) e componente filho (folha).
                        Componente A
                          /     \
                Componente B   Componente C
  O Componente A é o componente pai e os Componentes B e C são componentes filhos.

  Com isso, podemos imaginar como seria a estrutura de nossa aplicação, dado os seguinte componentes: 
    - Header, Logo, Menu, Link.
    - Nav, ListFriends, Friend.
    - Main, Feed, Post, Photo, Comments.
    - Aside, ListFriendsOnline, FriendOnline.
    - Footer.
  Nossa arvore de elementos seria algo como:
    _______________________________App_____________________
            /          \             \         \         \
        Header________Nav__________Main______Aside_____Footer
        /  \          /             /       \
    Logo___Menu____ListFriends_____Feed____ListFriendsOnline
            /           /            /         \
          Link_______Friend_________Post_____FriendOnline
                                    /  \
                                Photo___Comments
*/}     
// DOM, Shadow DOM e Virtual DOM
{/*
  O DOM é a estrutura HTML, hierarquica, que o navegador cria a partir do código HTML que escrevemos. Ele é uma árvore de elementos que representa a estrutura do nosso código. Exemplo: 
                HTML
                /  \
            HEAD        BODY
            /  \           \
          META  SCRIPT     MAIN
                          /  |  \
                  SECTION SECTION SECTION

  A partir do DOM, o navegador renderiza a página que vemos. O DOM é a representação do HTML que o navegador entende e renderiza.
  
  Já a Shadow DOM permite que em um determinado no da arvore de elementos, possamos ter um DOM separado, com suas próprias regras de estilização e comportamento. Exemplo:
                HTML
                /  \
            HEAD        BODY
            /  \           \
          META  SCRIPT     MAIN
                          /  |  \
                  SECTION SECTION SECTION
                                |
                              SHADOW
                              /   |  \
                        SECTION SECTION SECTION

  O Virtual DOM é uma técnica utilizada pelo React para otimizar o processo de renderização. Em vez de atualizar o DOM a cada mudança, o React atualiza uma cópia do DOM em memória, chamada de Virtual DOM. O React compara o Virtual DOM com o DOM real e atualiza apenas as partes que foram alteradas. Isso torna o processo de renderização mais rápido e eficiente.
  Com isso, raramente vamos manipular os elementos diretamente no DOM.

  Com isso, o React mantém uma cópia do DOM em memória, chamada de Virtual DOM. Quando um componente é atualizado, o React compara o Virtual DOM com o DOM real e atualiza apenas as partes (nos) que foram alteradas.
*/}
export default function Dom() {
  return (
    <div>
      DOM
    </div>
  )
}