const AboutHeader = ({ title, image, children }) => {
    return (
        <header className="aboutheader">
            <div className="aboutheader_container">
                <div className="aboutheader_container-bg">
                    <img src={image} alt="Header Background Image" />
                </div>
                <div className="aboutheader_containt">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )
}
export default AboutHeader;