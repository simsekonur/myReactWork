import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export class CoronaVirus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allInfo: [],
      actualCountry: "",
    };
  }

  componentDidMount = (params) => {
    axios
      .get(`https://coronavirus-19-api.herokuapp.com/countries`)
      .then((response) => {
        const allInfo = response.data;
        this.setState({ allInfo });
      });
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.actualCountry);
    const infos = this.state.allInfo.map((ele, index) => {
      if (
        ele.todayCases > 0 &&
        ele.country.toLowerCase() == this.state.actualCountry.toLowerCase()
      ) {
        return (
          <li>
            {ele.country} {ele.todayCases}
          </li>
        );
      }
    });
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Country Name</Label>
            <Input
              type="text"
              name="actualCountry"
              id="countryid"
              placeholder="Enter the country name"
              onChange={this.changeHandler}
            />
          </FormGroup>
        </Form>
        <ol>
          {infos}
        </ol>
      </div>
    );
  }
}

export default CoronaVirus;
