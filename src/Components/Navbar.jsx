import react from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends react.Component{
    render(){
        return(
            <>
                <div className="container.fluid" style={{backgroundColor:'#31326f',color:'white'}}>
                    <div className="d-flex justify-content-between align-items-center p-3">
                        {/* left (Logo) */}
                        <Link to='/'>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <img src="https://freedesignfile.com/upload/2017/08/alien-icon-vector.png" style={{height:'50px',width:'50px'}}/>
                                </div>
                                <div className="mx-2" style={{fontFamily:"Courier New"}}>
                                    <h5><b>Lukas Market-Place</b></h5>
                                </div>
                            </div>
                        </Link>
                        {/* middle (search bar & icon) */}
                        <div className="d-flex justify-content-between" style={{width:'800px'}}>
                            <div className="d-flex justify-content-between">
                                <input type="text" placeholder="Search" className="form-control" style={{width:'400px'}}/>
                                <input type="button" value="Search" className="btn btn-primary mx-2"/>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <span className='d-none d-md-block mx-2'>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className='d-none d-md-block mx-2'>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span className='d-none d-md-block mx-2'>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </span>
                            </div>
                        </div>
                        {/* right (login & register) */}
                        <div className="">
                            <div className="d-flex">
                                <Link to="/Login">
                                    <input type="button" value="login" className="btn btn-outline-primary mr-3"/>
                                </Link>
                                <Link to='/Register'>
                                    <input type="button" value="register" className="btn btn-outline-primary"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}