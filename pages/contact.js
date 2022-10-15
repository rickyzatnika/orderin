import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Contact() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/7726ed71-e052-465b-bfeb-b6a5c8fdebb8", {
      method: "POST",
      body: formData,
    }).then(() => {
      setQuery({ name: "", email: "", password: "" });
      Swal.fire({
        title: "Terimakasih",
        text: "Form berhasil terkirim",
        icon: "success",
        showCancelButton: false,
        showClass: {
          popup: "animate__animated animate__zoomInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      e.target.reset(setQuery);
    });
  };
  return (
    <div className="pt-40 flex items-center justify-center w-full h-screen">
      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className="">
          <textarea
            type="text"
            name="message"
            required
            placeholder="your message"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
