import './About.css'
import AboutHeader from '../../components/AboutHeader';
import AboutHeaderImage from '../../images/AboutHeader_image.jpg';
import StoryImage from '../../images/ourStory.jpg'
import AboutMission from '../../images/AboutMission.jpg'
import AboutVision from '../../images/AboutVision.jpg'

const About = () => {
    return (
        <>
            <AboutHeader title="About Us" image={AboutHeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est aliquid ab nihil quisquam velit aperiam nulla, dolore excepturi, voluptatibus accusantium. Eligendi quam sequi, similique eos necessitatibus veritatis tenetur totam.
            </AboutHeader>
            <section className='about_story'>
                <div className='container about_story-container'>
                    <div className='about_section-image'>
                        <img src={StoryImage} alt="load" />
                    </div>
                    <div className='about_section-containt'>
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem atque cum eius accusantium ducimus, facere porro ut officiis rem et ea voluptate sequi sapiente non omnis unde illum molestiae.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores, nam nostrum aliquid at officiis optio incidunt recusandae ea veritatis cumque exercitationem qui eos maxime debitis dolore fuga? Possimus, doloribus?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum maiores tenetur, atque placeat cumque quidem delectus tempore quaerat vero assumenda nobis soluta repellat ea? Ipsam in officia error dicta!

                        </p>
                    </div>
                </div>
            </section>
            <section className='about_vision'>
                <div className='container about_vision-container'>
                    <div className='about_section-image'>
                        <img src={AboutVision} alt='our-vision' />
                    </div>
                    <div className='about_section-containt'>
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium unde eius blanditiis reiciendis, quae quaerat facere possimus totam nobis magnam ab magni odit tempore, dolore, aut nemo ducimus porro?

                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam aspernatur amet doloremque omnis eaque molestiae nihil? Ipsa, repellendus eius ipsum non, cupiditate officiis at quo ea cum facere optio!</p>
                    </div>
                </div>
            </section>
            <section className='about_mission'>
                <div className='container about_mission-container'>
                    <div className='about_section-image'>
                        <img src={AboutMission} alt='our-mission' />
                    </div>
                    <div className='about_section-containt'>
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium unde eius blanditiis reiciendis, quae quaerat facere possimus totam nobis magnam ab magni odit tempore, dolore, aut nemo ducimus porro?

                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam aspernatur amet doloremque omnis eaque molestiae nihil? Ipsa, repellendus eius ipsum non, cupiditate officiis at quo ea cum facere optio!</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;