

import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b8csmud",
      "template1",
      e.target,
      "ichDfjQGlxbLQgPrN"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert("Merci de m'avoir contacté je vous répondrez le plus rapidement possible (:");
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };  

  return (
    <div className="justify-center"
  style={{
    backgroundImage:
      "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
    width: "100%",
    height: "95%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
  }}
>
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Contactez-moi :)"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-primary-200"
        >
          <div className="w-full flex flex-col">
          <label htmlFor="firstname" style={{ fontWeight: 'bold', fontSize: '18px' }}>Prénom</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Ex : Rayan"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="lastname" style={{ fontWeight: 'bold', fontSize: '18px' }}>Nom de Famille</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Ex : Tarbi"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '18px' }}>E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Votre E-mail "
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="message" style={{ fontWeight: 'bold', fontSize: '18px' }}>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950 bac bg-primary-200"
              placeholder="Votre message/demande ..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
          <input
            className="w-[100px] h-[50px] bg-primary-400 rounded-xl cursor-pointer hover:bg-primary-700 mb-5"
            type="submit"
            value={!isSent ? 'Envoyez' : 'Nickel'}
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;