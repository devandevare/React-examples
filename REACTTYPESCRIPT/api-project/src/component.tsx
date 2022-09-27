import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import ReactDOM from 'react-dom';
import react from "react";



// interface Props {

//     data: any[];
//      editdata: (parms: number) => void;
// }
interface Users {

    data: any;
    action: (parms: number) => void;

}
class Grid extends React.Component<Users, {}>{

    constructor(props: any) {
        super(props);
        this.state = { data: [] , editdata: (parms: number) => {}}


    }

    // componentDidMount = () => {
    //     axios.get("http://localhost:3000/posts").then(res => {

    //         // console.log(res.data)

    //         this.setState({ data: res.data })
    //         console.log(this.props.data)
    //     })



    // }

    deleteRecord = (dltrow: any) => {
        alert("Deleted row no: "+dltrow)
        axios.delete(`http://localhost:3000/posts/${dltrow}`)  
       .then(res => {

            // console.log(res.data)

            this.setState({ data: res.data })
            console.log(this.props.data)
             ReactDOM.render(<Grid data={this.props.data} action={this.props.action} />, document.getElementById('tableView'));
        })

    }
    
    render() {

        return (
            <div>
                <table className="table table-bordered table-primary  ">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>id</th>
                            <th>First Name</th>
                            {/* <th>Last Name</th> */}
                            <th>Email</th>
                            <th>adderss</th>
                             <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody id="tbodys">
                        {

                            (this.props.data).map((alldata: any, index: any) =>

                                <tr key={index}>

                                    <td>{index}</td>

                                    <td>{alldata.id}</td>

                                    <td>{alldata.Name}</td>

                                    <td>{alldata.email}</td>

                                    <td>{alldata.address}</td>

                                    <td><button className="btn btn-danger" onClick={() => this.deleteRecord(alldata.id)}>Delete</button></td>
                                    
                                    <td><button className="btn btn-primary" onClick={() => this.props.action(alldata.id)}>Edit</button></td>

                                </tr>)

                        }
                    </tbody>
                </table >

            </div>
        )

    }

}


export default Grid

