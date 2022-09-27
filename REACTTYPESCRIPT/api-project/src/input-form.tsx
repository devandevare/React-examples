import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import react from "react";
import ReactDOM from 'react-dom';
import Grid from './component'


interface Data {
    name: string;
    email: string;
    address: string;
    data: any;
    varify: number;
    isEdit: boolean
}

class Form extends react.Component<{}, Data> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            data: [],
            varify: 0,
            isEdit: true
        };
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/posts").then(res => {

            // console.log(res.data)

            this.setState({ data: res.data })
            // console.log(this.state.data)
        })



    }


    onTextChange = (event: any) => {
        switch (event.target.id) {
            case 'Name':
                this.setState({ name: event.target.value });
                break;
            // case 'Name':
            //     this.setState({ name: event.target.value });
            //     break;
            case 'Email':
                this.setState({ email: event.target.value });
                break;
            case 'Address':
                this.setState({ address: event.target.value });
                break;
            default:
                return;
        }
    }
    clearValues = () => {
        this.setState({
            name: '',
            email: '', address: ''
        })
    }
    sunmitdata = () => {

        axios.post('http://localhost:3000/posts', {
            "Name": this.state.name,
            "email": this.state.email,
            "address": this.state.address
        }).then(res => {
            console.log(res)
        })
        this.clearValues()


        // ReactDOM.render(<Grid data={this.state.data} action={this.editdata} />, document.getElementById('tableView'));
    }

    editdata = async (id: any) => {

        alert(id)
        this.setState({ varify: id })
        this.setState({ isEdit: false })
        await axios.get(`http://localhost:3000/posts/` + id).then(response => {

            this.setState({ name: response.data.Name, email: response.data.email, address: response.data.address })
            // console.log(response.data)

        })


    }

    updatedata = async () => {



        let res = await fetch(`http://localhost:3000/posts/${this.state.varify}`, {

            method: "PUT",

            body: JSON.stringify({

                "Name": this.state.name,

                "email": this.state.email,

                "address": this.state.address

            }),

            headers: {

                "Content-Type": "application/json"

            }

        })
        //  this.setState({ showBTN: true, gridUpdate: true })

    }


    render() {
        return (
            <>
                <div className="text-center bg-secondary form-group " >

                    <div className="mt-3 "> <input type="text" id='Name'  onChange={this.onTextChange} value={this.state.name} placeholder="Frist Name"></input>
                    </div>
                    {/* <input type="text" id='lName' className="mt-5" onChange={this.onTextChange} value={this.state.name} placeholder="Last name"></input> */}
                    <div className="mt-3">
                        <input type="text" id='Email' onChange={this.onTextChange} value={this.state.email} placeholder="Email"></input>
                    </div>
                    <div className="mt-3">
                        <input type="text" id='Address' className="mt- 3" onChange={this.onTextChange} value={this.state.address} placeholder="Address"></input>
                    </div>


                    <div className="mt-3 " >
                        {this.state.isEdit ?
                            <button type="button" id="btn1" className="btn btn-success" value="Register" onClick={this.sunmitdata} >Register</button>
                            : <button type="button" id="btn1" className="btn btn-warning" value="Register" onClick={() => this.updatedata()} >Update</button>}
                    </div>
                    <div id="tableView" className="mt-3 r-5 "><Grid data={this.state.data} action={this.editdata} /></div>

                </div>
            </>



        );
    }
}

export default Form