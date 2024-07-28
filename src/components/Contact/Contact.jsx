import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1c201079-5be4-4958-9a7c-fe3a11fc5bcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          tenetur dignissimos eligendi, animi, dolorem culpa molestias quas ad
          repellat quam mollitia perspiciatis ipsa!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@Tahir.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            03244774035
          </li>
          <li>
            <img src={location_icon} alt="" />
            lahore lahore uk yorlk
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your name</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Mobile Number"
            required
          />
          <label>Write your messag e here</label>
          <textarea
            name="message"
            row="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
