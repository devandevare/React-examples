import React from 'react';
import { createSuper } from 'typescript';

export interface IRegister{
    firstname: string;
    register:any[];
}

export interface IRList{
    firstname:string;
    lastnameL:string;
}
class ExpenseEntryItem extends React.Component<any, IRegister> {
    constructor(props:any, state: IRegister)
{   
    super(props);
    this.state ={
        firstname: "",
        register:[]
            
       
    }
}

public componentDidMount():void{
let array: IRList[] = [];
  array.push({
      firstname: this.state.firstname,
      lastnameL:"B"
  })



this.setState({register: array})
    // this.setState({firstname: ""})
}

public onFirstnameChange(event:any) {
    this.setState({firstname: event});
}

    render() {  
         return (
         <div>
             <h1>Hello React</h1>
             <h2>{this.state.firstname}</h2>
             <input type="text" onChange={e => this.onFirstnameChange(e.target.value)} value={this.state.firstname}></input>
             </div>
             )
         }
}

export default ExpenseEntryItem;