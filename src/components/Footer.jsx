// import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
    return (
        <footer>
            <div className='container footer_container'>
                <article>
                    <Link to="/" className='logo'>
                        <img src={logo} alt="Footer Logo" />
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut mollitia laudantium, obcaecati officia alias ipsa minus ad quo. Vero corporis atque dolorem accusamus tempora dicta ipsum quisquam suscipit reiciendis recusandae!</p>
                    <div className='footer_socials'>
                        <a href="https://linkedin.com/" target="_blank"><BsLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank"><BsFacebook /></a>
                        <a href="https://twitter.com/" target="_blank"><BsTwitter /></a>
                        <a href="https://instagram.com/" target="_blank"><FaInstagramSquare /></a>
                        <a href="https://gmail.com/" target="_blank"><SiGmail /></a>

                    </div>
                </article>
                <article>
                    <h4>NavLinks</h4>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Register">Register</Link>
                </article>
                <article>
                    <Link to="/Terms and Condition">Terms and Condition</Link>
                    <Link to="/Privacy Policy">Privacy Policy</Link>
                    <h3>Dr. HC School</h3>
                    <h4>Kestopur</h4>
                    <h4>Kolkata</h4>
                    <h3>contact: +91 7384191844</h3>
                    <h4>Email: aruncharan68@gmail.com</h4>
                </article>
            </div>

            <div className='footer_copyright'>
                <small>2023 School-Website -Arun @copyRight</small>
            </div>
        </footer>

    )
}
export default Footer;