import Card from '../UI/Card'



const Teacher = ({ image, name, job, Mob }) => {
    return (
        <Card className='teacher'>
            <div className='teacher_img'>
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <h3>{Mob}</h3>
        </Card>
    )
}
export default Teacher;