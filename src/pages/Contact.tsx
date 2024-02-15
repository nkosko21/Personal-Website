import NavigationBar from "../components/NavigationBar";
import linkedIn_icon from "../images/LinkedIn_Icon.png";
import email_icon from "../images/Email_Icon.png";
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <NavigationBar defaultValue={'contact'}/> 
            <h1 className="contact-header">Get in Touch</h1>
            <div className="get-in-touch-section">
                <div className="center">
                    <img 
                        src={email_icon} 
                        alt="Gmail" 
                        className="circle-image"
                    />
                    <h3 className="contact-text">University Email</h3>
                    <p className="contact-text">kosko.n@northeastern.edu</p>

                    <h3 className="contact-text">Personal Email</h3>
                    <p className="contact-text">nickoy7@gmail.com</p>
                </div>
                <div className="center">
                    <a 
                        href="https://www.linkedin.com/in/nicholas-kosko-a2727b232/"
                        target="_blank"
                    >
                        <img 
                            src={linkedIn_icon} 
                            alt="LinkedIn" 
                            className="circle-image"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/nicholas-kosko-a2727b232/"
                        target="_blank"
                        style={{ color: '#330066' }}
                    >
                        <p className="contact-text">
                            Click to Connect with me on LinkedIn
                        </p>
                    </a>
                </div>
            </div>

            <h2 className="contact-header" style={{ fontSize: '2rem' }}>Other Links</h2>
            <div className="center">
                <a href="https://github.com/nkosko21" target="_blank">
                    <p className="contact-text">My GitHub</p>
                </a>
                <a href="https://www.instagram.com/rarefishenthusiasts/" target="_blank">
                    <p className="contact-text">Rare Fish Enthusiasts Instagram</p>
                </a>
                <a href="https://www.instagram.com/7nkfilms/" target="_blank">
                    <p className="contact-text">Personal Film Instagram</p>
                    </a>
                <a href="https://letterboxd.com/7kosko/" target="_blank">
                    <p className="contact-text">Letterboxd</p>
                </a>
            </div>
        </div>
    );
}