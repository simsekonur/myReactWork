import "./App.css";
import CoronaVirus from "./components/CoronaVirus"
import FirstComp from "./components/FirstComp"
import SecondComp from "./components/SecondComp"
import React, { Component } from "react";
import {Label,Input} from "reactstrap"

export class App extends Component {
  name = "Onur";
  constructor(props) {
    super(props);
    this.state = {
      name : '',
    }
  }
  changeHandler = (params) => {
    this.setState({[params.target.name]:params.target.value})
  
    
  
  }

  
  
  render() {
     var lst = ["Onur", "Veli","Ahmet","Mehmet"]
    return (
      <div>
        deneme

        <Label>
          Name:
        </Label>
        <Input 
        type = "text"
        name= "name"
        placeholder= "Enter a name:"
        onChange = {this.changeHandler}> </Input>
        <p>Hi from App!</p>
        <CoronaVirus />
        <FirstComp name= "Onur" />
        <SecondComp liste= {lst} />
      </div>
    );
  }
}

export default App;
