import React from 'react'
import '../css/contact.css';
import '../App.css'
import { Helmet } from 'react-helmet';
function Contact() {
    return (
        <div className='page-container page-new'>
            <Helmet>
                <title>Contact Structure Realm</title>
                <meta name="description" content="About Abinash Mandal - Structural Engineer and Lecturer" />
            </Helmet>
            <h2>About Me</h2>
            <p>
                Hello, I'm <strong>Abinash Mandal</strong>, a structural engineer passionate about advancing structural engineering through innovation.
                I specialize in leveraging <strong>machine learning</strong> and <strong>deep learning</strong> to design efficient and high-performance structural systems.
            </p>
            <hr />
            <h3 >Professional Background</h3>
            <ul>
                <li style={{ marginBottom: '1rem' }}>
                    <strong>Structural Engineer at Bric Consult Pvt. Ltd., Lalitpur, Nepal</strong> (2019 - Present): Involved in the structural design of RCC and steel buildings and bridges in Nepal, with a focus on safety, durability, and compliance with industry standards.
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <strong>Lecturer at Himalaya College of Engineering, Lalitpur, Nepal</strong> (2023 - Present): Teaching courses such as Engineering Mechanics, Strength of Materials, Theory of Structures I & II, Design of Steel Structures, and Computational Techniques (Finite Element Method). Mentoring students to inspire the next generation of structural engineers.
                </li>
            </ul>
            <hr />
            <h3 >Research Papers Published</h3>
            <ul>
                <li style={{ marginBottom: '1rem' }}>
                    Mandal, A., & Joshi, H. R. (2020). <i>Effect of change in rise/span ratio on performance of open thin cylindrical shells.</i> Proceedings of the 8th IOE Graduate Conference. <a href='http://conference.ioe.edu.np/ioegc8/papers/ioegc-8-089-80122.pdf' target="_blank" rel="noopener noreferrer">[Paper Link]</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    Abinash Mandal. <i> Predicting Compressive Strength of Concrete Using Advanced Machine Learning Techniques.</i> Accepted for publication in Asian Journal of Civil Engineering (2024). <a href='https://doi.org/10.21203/rs.3.rs-5401974/v1' target="_blank" rel="noopener noreferrer">[Preprint Link]</a>
                </li>
            </ul>
            <hr />
            <h3>Get in Touch</h3>
            <p>
                I’m always open to discussing ideas, collaborations, or answering questions. Feel free to contact me through the form below or connect with me on social media:
            </p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/abinash-mandal-90132b238/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/abinash.mandal.37" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </li>
            </ul>
            <form className='contactform' action="https://formsubmit.co/abinashmandal33486@gmail.com" method="POST">
                <textarea rows={3} cols={40} placeholder="Your message here..." type="text" name="name" required />
                <br />
                <textarea rows={1} cols={40} placeholder="Your email address here..." type="email" name="email" required />
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="https://civilengineering-mcq.web.app/thanks"></input>
                <button type="submit">Send</button>

            </form>


        </div>

    )
}

export default Contact