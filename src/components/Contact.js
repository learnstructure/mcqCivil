import React from 'react'
import '../css/contact.css';
import '../App.css'
import { Helmet } from 'react-helmet';
function Contact() {
    return (
        <div className='page-container page-new'>
            <Helmet>
                <title>Contact Civil Mcq</title>
                <meta name="description" content="contact us page" />
            </Helmet>
            <h2>About Me</h2>
            <p>
                Hello, I'm <strong>Abinash Mandal</strong>, a structural engineer with a strong focus on innovation in structural design. I leverage <strong>machine learning</strong> and <strong>deep learning</strong> techniques to develop cutting-edge structural systems and materials, optimizing both performance and efficiency.
            </p>

            <h3>Professional Background</h3>
            <ul>
                <li>
                    <strong>Structural Engineer at Bric Consult Pvt. Ltd., Lalitpur, Nepal</strong> (2019 - Present): Involved in the structural design of buildings and bridges in Nepal, I apply engineering principles to create safe, durable structures that meet industry standards.
                </li>
                <li>
                    <strong>Assistant Lecturer at Himalaya College of Engineering, Lalitpur, Nepal</strong> (2023 - Present): In academia, I enjoy sharing my expertise in structural engineering, helping to inspire and educate the next generation of engineers.
                </li>
            </ul>

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