import AboutHeader from '../../components/AboutHeader'
import GalleryImage from '../../images/galleryHead.jpg'
import './Gallery.css'




const Gallery = () => {
    const galleryLength = 9;
    const images = []

    for (let i = 1; i < galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
            <AboutHeader title="Our Gallery" image={GalleryImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa ea iure enim quo eos velit inventore quas voluptate quaerat maxime deleniti exercitationem fugit laboriosam, perferendis ducimus officiis. Expedita, excepturi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam molestias repudiandae labore. Eligendi, distinctio dolorem maxime adipisci labore neque velit, amet esse nobis accusamus deserunt facilis. Officia, dicta accusamus.


            </AboutHeader>
            <section className='gallery'>
                <div className='container gallery_container'>
                    {
                        images.map((image, index) => {
                            return <article key={index}><img src={image} className='img' alt={`Gallery Image ${index + 1}`} /></article>
                        })
                    }
                </div>

            </section>
        </>
    )
}
export default Gallery;