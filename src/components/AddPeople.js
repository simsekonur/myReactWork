import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export class AddPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name :'',
        surname :'',
        gender :'Male',
    };
   
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
}

  changeHandler = (event) => {
      this.setState({[event.target.name]:event.target.value})
  }
  
  
  submitHandler = (event) => {
        console.log(this.state);     
  }
  
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label >Name</Label>
            <Input
              type="text"
              name="name"
              
              placeholder="Enter your name:"
              onChange ={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label >Surname</Label>
            <Input
              type="text"
              name="surname"
             
              placeholder="Enter your surname:"
              onChange ={this.changeHandler}

            />
          </FormGroup>
          <FormGroup>
            <Label >Gender</Label>
            <Input type="select" name="gender"
            onChange ={this.changeHandler}
            >
              <option>Male</option>
              <option>Female</option>
            
            </Input>
          </FormGroup>
        <Button className= "btn btn-success" onClick={this.submitHandler} >Submit</Button>
        </Form>
    
      </div>
    );
  }
}

export default AddPeople;
