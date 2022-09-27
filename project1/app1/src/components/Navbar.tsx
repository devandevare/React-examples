import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

class Navbar extends react.Component {
    render() {
        return (

            <div className='d-flex  py-3 navbar'>
                <div className='justify-content-between px-5'><h4 className='text-light '>Start Bootstrap</h4></div>
                <div className='d-flex '>
                    <a href='/'><p className='h2 px-2  text-light'>Home</p></a>
                    <a href='/Portfolio'><p className='h2 px-2 text-light'>Portfolio</p></a>
                    <a href='/about'><p className='h2 px-2 text-light '>About</p></a>
                    <a href='/contact'><p className='h2 px-2  text-light'>Contact Us</p></a>
                </div>

            </div>

        );
    }
}

export default Navbar