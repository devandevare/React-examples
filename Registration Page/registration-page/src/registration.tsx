import './App.css';
import { Input, Gender, Subjects, Checkbox, Submit, ClearAll ,Tabledata } from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Registration() { 
    

    return ( 
        
        <div className='container-fluid justify-content-center bg-info'>
            <div className='container-fluid justify-content-center bg-white' style={{ maxWidth: 500 }} >

                <div >
                    <h2 className='display-4 text-center'>Register</h2>

                    <p className='lead text-center'>Create your account. It's free and only takes a minute.</p>
                    <div className="p-1 m-1 col-md-11 " >
                        <Input type="text" id="fname" inputtext="First Name" className="p-2 m-2 col-md-5" ></Input>

                        <Input type="text" id="lname" inputtext="Last Name" className="p-2 m-2 col-md-5.2 "></Input>
                    </div>

                    <div className="p-1 m-2 col-md-11"><Input type="text" id="email" inputtext="Email" className="p-2 m-2 col-md-11 "></Input></div>

                    <div className="p-1 m-2 col-md-11" ><Input type="text" id="pass" inputtext="Password" className="p-2 m-2 col-md-11"></Input></div>

                    <div className="p-1 m-2 col-md-11"><Input type="text" id="cpass" inputtext="Confirm Password" className="p-2 m-2 col-md-11" ></Input></div>

                    <div className="p-0 m-2 col-md-11 "><Gender /></div>

                    <div className=" m-2 col-md-11 "><Subjects option={["MCA", "BCA", "BSC", "B.COM"]} /></div>

                    <div className='justify-content-center '> <Checkbox /></div>

                    <div className="p-0 m-2 col-md-11"><button type="button" id="btn1" value="Register" onClick={Submit} className="btn btn-success btn-lg btn-block btn-sm w-70 p-3 m-2" >Register</button></div>

                    <div className="p-0 m-2 col-md-11"><Input type="button" id="btn1" value="Clear All" onClick={ClearAll} className="btn btn-danger btn-lg btn-block btn-sm w-70 p-3 m-2" ></Input></div>
                </div >

                <div className="text-center">Already have an account? <a href="#">Sign in</a></div>

            </div>
            <div className="p-0 m-3 col-md-11 ml-4 "><Tabledata/></div>
        </div>

    )
}


export default Registration 