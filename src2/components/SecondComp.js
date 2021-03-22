import React, { Component } from 'react'

export class SecondComp extends Component {
    constructor(props) {
        super(props);
        
    }
       lstHere = this.props.liste;
    
     lstMapped = this.lstHere.map((element,index) =>  {
         return (
             <li>
                 {index+1}. element is {element}
             </li>
         )
     } )
    render() {
        
        return (
            <div>
                <ul>
                    {this.lstMapped}
                </ul>
            </div>
        )
    }
}

export default SecondComp
