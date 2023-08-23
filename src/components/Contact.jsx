import React from "react";
import axios from "../config/axios-config";
import { POST_CONTACT } from "../data/constats";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitData = async () => {
    if (name.length <= 3) {
      setError("Ismingizni kiriting!");
      return;
    }

    if (phone.length <= 11 || phone.length > 13) {
      setError("Raqamingizni to'g'ri kiriting!");
      return;
    }

    setLoading(true);
    try {
      await axios.post(POST_CONTACT, {
        name,
        phone,
      });
      setName("");
      setPhone("+998");
      setLoading(false);
      setError("")
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  return (
    <div
      className="custom-container my-8 flex flex-col gap-4"
      id="contact"
      data-aos="fade-up"
    >
      <h1 className="text-[30px] font-bold text-center">
        Biz bilan <span className="text-[#2EDD99]">bog'lanish</span>
      </h1>
      <div className="bg-[#5FE2AFCC] p-4 rounded-lg flex items-start flex-col gap-4">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-3 md:w-fit w-full">
            <label htmlFor="name" className="text-white">
              Ismingiz
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="px-4 py-3 rounded-lg outline-none"
              placeholder="Ismingiz"
            />
          </div>
          <div className="flex flex-col gap-3 md:w-fit w-full">
            <label htmlFor="phone" className="text-white">
              Raqamingiz
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="phone"
              className="px-4 py-3 rounded-lg outline-none"
              placeholder="Raqamingiz"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {error.length == 0 ? (
            ""
          ) : (
            <p className="md:text-start text-center md:w-fit w-full text-[red]">{error}</p>
          )}
          <button
            className="md:w-fit w-full px-4 py-3 h-[50px] relative rounded-lg bg-[#2EDD99]"
            onClick={submitData}
          >
            {loading ? "Yuborilmoqda" : "Yuborish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
