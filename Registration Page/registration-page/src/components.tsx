import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Registration.css';
import { Button, FormControl, Dropdown } from 'react-bootstrap';
import $ from "jquery";




function Input(props) {

    return (
        <input type={props.type} id={props.id} placeholder={props.inputtext} value={props.value} className={props.className} onClick={props.onClick}  ></input>

    )
}

function Gender(props) {
    return (<>

        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Gender:</p>
                </div>
                <div className="form-check col">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" >
                        Male
                    </label>
                </div>
                <div className="form-check col">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label className="form-check-label" >
                        Female
                    </label>
                </div>
            </div>
        </div>


    </>)
}

function Subjects(props) {

    let values = props.option
    return (
        <Dropdown>

            <Dropdown.Toggle variant="dark" size="sm">

                Select Your Education

            </Dropdown.Toggle>

            <Dropdown.Menu>

                {values.map((option) => <Dropdown.Item >{option}</Dropdown.Item>)}

            </Dropdown.Menu>

        </Dropdown>
    )
}

function Checkbox() {
    return (<div className="form-check m-3">
        <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
        />
        <label className="form-check-label" >
            I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
        </label>
    </div>

    )

}

let fname, lname, email, pass;
function Submit() {

    // alert("Submit")

    // fname = document.getElementById("fname").value;
    // lname = document.getElementById("lname").value;
    // email = document.getElementById("email").value
    // pass = document.getElementById("pass").value;

    Showdata();

}

function Showdata() {
    let Grid = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td></tr>"
    $("#tbodys").append(Grid);
    Grid = '';

}


function ClearAll() {

    alert("clear")

}

function Tabledata() {
    return (
        <table className="table table-bordered table-primary ml-5 mr-1 ">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                {/* <th>Gender</th>
                <th>Subject</th>
                <th colspan="2">Action</th> */}
            </thead>
            <tbody id="tbodys">

            </tbody>
        </table>
    )
}

export { Input, Gender, Subjects, Checkbox, Submit, ClearAll, Tabledata }