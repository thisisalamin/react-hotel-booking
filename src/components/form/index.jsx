import React from "react";

const Form = () => {
  return (
    <div className="tm-bg-white tm-p-4">
      <form action="index.html" method="post" className="contact-form">
        <div className="form-group">
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="contact_subject"
            name="contact_subject"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="contact_message"
            name="contact_message"
            className="form-control"
            rows="9"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary tm-btn-primary">
          Send Message Now
        </button>
      </form>
    </div>
  );
};

export default Form;
