import './Register.css'
import StoryImage from '../../images/ourStory.jpg'


import { Link } from 'react-router-dom'


const Register = () => {
    return (

        <>
            <section className='register_story'>
                <div className='container about_story-container'>
                    <div className='about_section-image'>
                        <img src={StoryImage} alt="load" />
                    </div>
                    <div className='about_section-containt'>
                        <h2>Student LogIn</h2>
                        <Link to="/RegisterForm" className='btn md'>Register</Link>


                    </div>
                </div>
                <div className='container register_story-container'>
                    <div className='about_section-image'>
                        <img src={StoryImage} alt="load" />
                    </div>
                    <div className='about_section-containt'>
                        <h2>Admin Login</h2>
                        <Link to="/Register" className='btn md'>Login</Link>


                    </div>
                </div>
            </section>

        </>
    )
}
export default Register;