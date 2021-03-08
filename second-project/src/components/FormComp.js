import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aNumber:props.number,
      gnumber: "",
      setOfNumber: [],
      whatToReturn : "++"
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler = (event) => {
    this.setState({ gnumber: event.target.value });
  };
 
  

  submitHandler = (params) => {
    this.setState({
      setOfNumber: [...this.state.setOfNumber, this.state.gnumber],
    });
    console.log(this.state.setOfNumber);
  };

  checkNumber = () => {
    console.log(this.state.aNumber);
    if (this.state.aNumber.length === this.state.gnumber.length){
        for (var i=0; i <= this.state.aNumber.length;i++){
            if (this.state.aNumber == this.state.gnumber){
                this.setState({whatToReturn:"++++"})
            }
        }
    }
    
    
      
  }
  

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Tahmininiz</Label>
            <Input
              type="text"
              name="guess"
              placeholder="Enter your guess:"
              onChange={this.changeHandler}
            />
            <Button className="btn btn-primary" onClick={this.submitHandler}>
              OK
            </Button>

          <Button className="btn btn-primary" onClick={this.checkNumber}>
              dummy 
    </Button> 

          </FormGroup>
        </Form>
        <h2>Önceki Tahminleriniz</h2>

        {this.state.setOfNumber.map((number, index) => (
          <p>
            {number} 
          </p>
        ))}
        <p>{this.state.whatToReturn}</p>

        
      </div>
    );
  }
}

export default FormComp;
