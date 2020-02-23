import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container-fluid-3 contactForm">
      <h1 className="title">Contact Me</h1>
      <h1 className="contacth1">
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form action="mailto:abhuday.mishra@hotmail.com">
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          className="input"
          required
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          className="input"
          required
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
          className="input"
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="input"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
