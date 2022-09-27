import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid homediv">
                <h1>Home Page</h1>
                <div className=" d-flex justify-content-center text-light">
                    <h1>START BOOTSTRAP</h1>
                </div>
            </div>
        );
    }
}

export default Home