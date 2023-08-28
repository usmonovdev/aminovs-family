import React from "react";
import axios from "../config/axios-config";
import { POST_CONTACT } from "../data/constats";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IMaskInput } from "react-imask";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{998}000000000"
      definitions={{
        _: /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const Contact = () => {
  const { i18n, t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitData = async () => {
    if (name.length <= 3) {
      setError("contact.nameError");
      return;
    }

    if (phone.length <= 11 || phone.length > 13) {
      setError("contact.numberError");
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
      setError("");
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
        {i18n.language == "uz" ? (
          <>
            Biz bilan <span className="text-[#2EDD99]">bog'lanish</span>
          </>
        ) : i18n.language == "ru" ? (
          <>
            <span className="text-[#2EDD99]">Связаться</span> с нами
          </>
        ) : (
          <>
            Contact <span className="text-[#2EDD99]">Us</span>
          </>
        )}
      </h1>
      <div className="bg-[#5FE2AFCC] p-4 rounded-lg flex items-center flex-col gap-4 lg:w-[70%] md:w-[90%] w-full mx-auto">
        <div className="flex sm:flex-row flex-col gap-3">
          <div className="flex flex-col sm:gap-2 gap-0 md:w-fit w-full">
            <label htmlFor="name" className="text-white">
              {t("contact.name")}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="contact-input"
              placeholder={t("contact.name")}
            />
          </div>
          <div className="flex flex-col sm:gap-2 gap-0 md:w-fit w-full">
            <label htmlFor="phone" className="text-white">
              {t("contact.number")}
            </label>
            <TextMaskCustom
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              className="contact-input"
              placeholder={t("contact.number")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {error.length == 0 ? (
            ""
          ) : (
            <p className="md:text-start text-center md:w-fit w-full text-[red]">
              {t(error)}
            </p>
          )}
          <button
            className="md:w-fit w-full px-4 py-3 h-[50px] relative rounded-lg bg-[#2EDD99]"
            onClick={submitData}
          >
            {loading ? (
              <>{t("helpers.loading")}</>
            ) : (
              <>{t("helpers.yuborish")}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
