import './Service.css'
import AboutHeader from '../../components/AboutHeader'
import ServiceImage from '../../images/ServiceHeader.jpg'
import { teachers } from '../../data'
// import { } from 'react-icons/'
import Teacher from '../../components/Teacher'







const Service = () => {
    return (
        <>
            <AboutHeader title="Our Teachers" image={ServiceImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde amet saepe quae mollitia quis aliquid, iusto commodi sapiente provident aut ut sed, placeat laboriosam delectus eligendi omnis quo nostrum animi.


            </AboutHeader>
            <section className='service'>
                <div className='container service_container'>
                    {
                        teachers.map(({ id, image, name, job, Mob }) => {
                            return <Teacher key={id} image={image} name={name} job={job} Mob={Mob}></Teacher>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Service;