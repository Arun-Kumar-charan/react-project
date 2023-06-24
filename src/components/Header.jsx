import { Link } from 'react-router-dom'
import Image from '../images/header.jpg'
// import './Home.css'
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <div className="header-left">
                        <h2>Dr HC Public School</h2>
                        <h3>join for great future</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, non animi molestias autem assumenda error nihil hic possimus, consectetur illum deserunt, recusandae eaque. Sit ea optio similique tempora, laborum nesciunt.</p>
                        <Link to="/Register" className='btn lg'>Get Started</Link>

                    </div>

                    <div className="header-right">
                        <div className='header-circle'></div>
                        <div className='header-image'>
                            <img src={Image} alt="Header-Image" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;