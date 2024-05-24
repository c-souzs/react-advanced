/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";

type RenderComponent<T> = {
  tagName: string;
  props: T;
};

type ElementTypeCreateElementParam<T> = string | ((props: T) => RenderComponent<T>);

const React = {
  createElement: function <T>(elementType: ElementTypeCreateElementParam<T>, props:T, ...children: any[]) {
    const propsFull  = {
      ...props,
      children,
    };

    if(typeof elementType === "function") {
      return elementType(propsFull); // Executa a funcao do componente App pela primeira vez
    }

    const renderComponent: RenderComponent<T> = {
      tagName: elementType,
      props: propsFull,
    };

    console.log("Render component: ", renderComponent);

    return renderComponent;
  }
}

function convertVirtualDomToHTML(virtualNode: RenderComponent<any>) {
  if(typeof virtualNode === "string") {
    return document.createTextNode(virtualNode);
  }

  const element = document.createElement(virtualNode.tagName);

  const { children, ...attributes } = virtualNode.props;

  // Adiciona todos os atributos do elemento
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  // Adiciona todos os filhos do elemento dentro dele
  children.forEach((virtualChild: any) => {
    element.appendChild(convertVirtualDomToHTML(virtualChild));
  })

  return element;
}

const ReactDOM = {
  createRoot: function (rootApplication: HTMLElement) {
    return {
      render: function (objectVirtualDOM: any) {
        const htmlVirtualDOM = convertVirtualDomToHTML(objectVirtualDOM);
        
        rootApplication.appendChild(htmlVirtualDOM);
      },
    };
  }
}

const App = (): RenderComponent<any> => {
  return (
    React.createElement(
      "div",
      {
        className: "app",
      },
      React.createElement("h1", null, "Contador"),
      React.createElement(
        "div",
        null,
        React.createElement("p", null, "0"),
        React.createElement(
          "button",
          {
            onClick: () => console.log("Incrementar"),
          },
          "Incrementar"
        ),
        React.createElement(
          "button",
          {
            onClick: () => console.log("Incrementar"),
          },
          "Decrementar"
        )
      )
    )
  ) 
};


const initApplication = React.createElement(App, null);

console.log("initApplication: ", initApplication);

ReactDOM.createRoot(document.getElementById("root")!).render(
  initApplication
);