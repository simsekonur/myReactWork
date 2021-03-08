import React, { Component } from "react";
import FormComp from "./components/FormComp"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      actualNumber: (Math.floor(Math.random() * 1001)).toString(),


    }
  }
  


  render() {

    
    return (
      <div>
        <FormComp number = {this.state.actualNumber}/>
   

      </div>
    );
  }
}

export default App;

