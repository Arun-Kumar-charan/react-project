import { GiDiamondTrophy } from 'react-icons/gi'
import Section from './Section'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

import { DiAtom } from 'react-icons/di'

const Programs = () => {
    return (
        <>
            <section className="programs">
                <div className="container programs_cantainer">
                    <Section icon={<GiDiamondTrophy />} title="Programs" />


                </div>
                <div className="programs_wrapper">
                    {
                        programs.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className="programs_program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>Learn More<DiAtom /></Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Programs;