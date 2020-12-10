import React from "react"
import "./contactForm.css"
import { Button } from "../components/ButtonElements"

const Contact = () => {
  return (
    <div className="contact-form-container">
      <form
        className="form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h1>Contact Us.</h1>
        <div className="form-inputs">
          <label className="form-label">First name </label>
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
            // value={values.firstname}
            // onChange={handleChange}
          />
          {/* {errors.firstname && <p>{errors.firstname}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last name </label>
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Enter your lastname"
            // value={values.lastname}
            // onChange={handleChange}
          />
          {/* {errors.lastname && <p>{errors.lastname}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="form-inputs2">
          <label className="form-label">Message </label>
          <div>
            <textarea
              className="form-input2"
              type="text"
              name="message"
              spellcheck="true"
              placeholder="Enter your message"
              // value={values.message}
              // onChange={handleChange}
            />
          </div>
          {/* {errors.message && <p>{errors.message}</p>} */}
        </div>
        <button className="form-input-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact

{
  /* <div className="form-inputs">
          <input name="First-Name" placeholder="First Name" type="text" />
        </div>
        <input name="Last-Name" placeholder="Last Name" type="text" />
        <input name="Email" placeholder="Your@Email.com" type="email" />
        <textarea name="Message" placeholder="Enter your message here." />
        <Button>Send</Button> */
}