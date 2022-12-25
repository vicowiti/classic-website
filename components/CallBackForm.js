import React, { useState } from "react";

const CallBackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonText, setButtonText] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    setEmail("");
    setName("");
    setPhone("");
    setButtonText("Sending...");

    setTimeout(() => {
      setButtonText("Success");
    }, 3000);

    setTimeout(() => {
      setButtonText("Submit");
    }, 3000);
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <h3 className="footer-heading-minor">Request a callback.</h3>
      <div>
        <input
          className="footer-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
      </div>

      <div>
        <input
          className="footer-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          className="footer-input"
          type="number"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button className="footer-btn" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default CallBackForm;
