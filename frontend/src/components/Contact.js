import React from 'react'

function Contact() {
    return (
        <div>
            <div className="contact-page">
                <h1>Contact Us</h1>
            </div>
            <div className="contact">
                <div className="contact-map">
                    <embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5359810056166!2d72.84446541498174!3d19.040158087108484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9100216cbab%3A0x2385770e8577615b!2smahim%20railway%20station!5e0!3m2!1sen!2sin!4v1629790357872!5m2!1sen!2sin"></embed>
                </div>
                <div className="contact-info">
                    <h1>Information</h1>
                    <h4>Developed By @deva_art_official</h4>
                    <h4>Name: Devendra Shigvan</h4>
                    <h4>Address: Shahu Nagar, Mahim, Mumbai-400017</h4>
                    <h4>Email ID: devendrashigvan03@gmail.com</h4>
                    <h4>Contact Number: +91 703 987 5803</h4>
                </div>
                <div className="contact-feedback">
                    <h1>Feedback</h1>
                    <form>
                        <input className="name" type="text" placeholder="Enter Full Name"></input><br></br>
                        <input type="email" placeholder="Email ID"></input>
                        <input type="number" placeholder="Contact"></input><br></br>
                        <textarea title="message" placeholder="Message"></textarea><br></br>
                        <button type="submit">Send Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
