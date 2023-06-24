// import './Service.css'
import Section from "./Section"
// import { FaAward } from 'react-icons/fa'
// import {  } from 'react-icons/io'
import { IoMdSchool, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Card from "../UI/Card"
import { award } from "../data"
import { useState } from "react"




const Award = () => {
    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = award[index];

    const previousAwardHandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(award.length - 1);
        }
    }
    const nextAwardHandler = () => {
        setIndex(prev => prev + 1);
        if (index >= award.length - 1) {
            setIndex(0);
        }
    }


    return (
        <>
            <section className="award">
                <div className="container award_container">
                    <Section icon={< IoMdSchool />} title="Award" className="award_head" />
                    <Card className="award">
                        <div className="award_avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <p className="award_quote">{`"${quote}"`}</p>
                        <h5>{name}</h5>
                        <small className="award_title">{job}</small>

                    </Card>
                    <div className="award_btn-container">
                        <button className="award_btn" onClick={previousAwardHandler}><IoIosArrowBack /></button>
                        <button className="award_btn" onClick={nextAwardHandler}><IoIosArrowForward /></button>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Award;