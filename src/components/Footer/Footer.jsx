import './Footer.css'

// Create Footer component that will lie at the bottom of every page 
const Footer = () => {
    return (
        <footer className="footer fixed-bottom d-flex justify-content-between">
            <div className="links d-flex ms-lg-4 mt-2">
                <a href="https://github.com/cedekpoole" target="_blank"><i className="fa-brands fa-github mx-3 fa-fade"></i></a>
                <a href="https://www.linkedin.com/in/cam-edek-poole/" target="_blank"><i className="fa-brands fa-linkedin mx-3 fa-fade"></i></a>
                <a href="https://discordapp.com/users/1003033771618086922" target="_blank"><i className="fa-brands fa-discord mx-3 fa-fade"></i></a>
            </div>
           <p className="m-2 lead"><i className="fa-regular fa-copyright"></i> cedekpoole</p>
        </footer>
    )
}

export default Footer;