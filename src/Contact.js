import React from "react";
import Contacts from "./Contacts"

const Contact = (prop) =>  {
    return (
        <div className="contact-wrapper">
            <p className="name">{prop.firstName} {prop.lastName}</p>
             <p className="number">{prop.number}</p>
        </div>
    )
}
export default Contact;