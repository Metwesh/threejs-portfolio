import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import EarthCanvas from "../components/canvases/EarthCanvas";
import SectionWrapper from "../container/SectionWrapper";
import { styles } from "../styles";
import { slideIn } from "../utilities/motion";
import ErrorContainer from "./ErrorContainer";

type FormKeys = "name" | "email" | "message";

type FormErrors = FormKeys | "request";

type RequestState = "idle" | "loading" | "success" | "error";

// TODO: Add validation and error handling
export default function ContactForm() {
  const [clientName, setClientName] = useState("");
  const [formData, setFormData] = useState<{ [key in FormKeys]: string }>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{
    [key in FormErrors]: false | string;
  }>({
    name: false,
    email: false,
    message: false,
    request: false,
  });

  const [requestState, setRequestState] = useState<RequestState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const key = e.target.id as FormKeys;
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [key]: false }));
  }

  function validateForm(): boolean {
    const errors: { [Key in FormKeys]: string | false } = {
      name: false,
      email: false,
      message: false,
    };

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = "Enter a valid email";
    if (!formData.message) errors.message = "Message is required";

    const formIsValid = Object.values(errors).every((x) => !x);
    setFormErrors((prev) => ({ ...prev, ...errors }));
    if (!formIsValid) {
      (
        document.querySelector('*[data-has-error="true"]') as HTMLInputElement
      )?.focus();
      document.querySelector('*[data-has-error="true"]')?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    return formIsValid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) return;
    setRequestState("loading");
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Mohamed H. Aly",
          from_email: formData.email,
          to_email: import.meta.env.VITE_PERSONAL_EMAIL,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setRequestState("success");
          setClientName(formData.name);
          setFormData({ name: "", email: "", message: "" });
          setFormErrors({
            name: false,
            email: false,
            message: false,
            request: false,
          });
        },
        () => {
          setRequestState("error");
          setClientName("");
          setFormErrors((prev) => ({
            ...prev,
            request: "Something went wrong, please try again later",
          }));
          setTimeout(() => {
            setRequestState("idle");
            setFormErrors((prev) => ({ ...prev, request: false }));
          }, 5000);
        },
      );
  }

  const inputList = useMemo<
    Array<{ value: FormKeys; label: string; textArea?: true }>
  >(
    () => [
      { value: "name", label: "Name" },
      { value: "email", label: "Email" },
      { value: "message", label: "Message", textArea: true },
    ],
    [],
  );

  return (
    <SectionWrapper id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-hidden"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <div
            className={`relative overflow-hidden ${
              requestState !== "success" ? "p-1 m-[-4px]" : ""
            }`}
          >
            <motion.form
              initial="show"
              animate={requestState !== "success" ? "show" : "hidden"}
              variants={slideIn("left", "spring", 0, 0.3)}
              onSubmit={handleSubmit}
              className="flex flex-col mt-12"
            >
              <ErrorContainer error={formErrors.request}>
                {inputList.map((input) => (
                  <label
                    key={input.value}
                    htmlFor={input.value}
                    className="flex flex-col"
                  >
                    <span className="text-white font-medium mb-4">
                      {`Your ${input.label}`}
                    </span>
                    <ErrorContainer error={formErrors[input.value]}>
                      {input.textArea ? (
                        <textarea
                          rows={7}
                          id={input.value}
                          name={input.value}
                          data-has-error={!!formErrors[input.value]}
                          value={formData[input.value]}
                          onChange={handleChange}
                          disabled={requestState === "loading"}
                          placeholder={`Enter your ${input.value} here`}
                          className={`${
                            formErrors[input.value] ? "ring-2 ring-red-500" : ""
                          } ${styles.input} resize-none`}
                        />
                      ) : (
                        <input
                          type="text"
                          inputMode={input.value === "email" ? "email" : "text"}
                          id={input.value}
                          name={input.value}
                          autoComplete={input.value}
                          value={formData[input.value]}
                          data-has-error={!!formErrors[input.value]}
                          onChange={handleChange}
                          disabled={requestState === "loading"}
                          placeholder={`Enter your ${input.value} here`}
                          className={`${
                            formErrors[input.value] ? "ring-2 ring-red-500" : ""
                          } ${styles.input}`}
                        />
                      )}
                    </ErrorContainer>
                  </label>
                ))}
              </ErrorContainer>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:cursor-progress"
                disabled={requestState !== "idle"}
              >
                {requestState === "loading"
                  ? "Sending..."
                  : requestState === "error"
                    ? "Error"
                    : requestState === "success"
                      ? "Sent"
                      : "Send"}
              </button>
            </motion.form>
            <motion.div
              className="absolute inset-0"
              initial="hidden"
              animate={requestState === "success" ? "show" : "hidden"}
              variants={slideIn("right", "spring", 0, 0.3)}
            >
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                  fillRule="nonzero"
                  fill="#aaa6c3"
                />
              </svg>
              <p className="mt-4 text-secondary text-[17px] leading-[30px]">
                {`Thank you for your message, ${clientName}! I will get back to you shortly.`}
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] select-none"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
