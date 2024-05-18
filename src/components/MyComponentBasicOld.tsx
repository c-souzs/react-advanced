import React from "react";

type MyComponentProps = {
  title: string;
  fnClick: () => void;
}

export default class MyComponentBasicOld extends React.Component {
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