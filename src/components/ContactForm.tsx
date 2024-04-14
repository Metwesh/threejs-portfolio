import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import EarthCanvas from "../components/canvases/EarthCanvas";
import SectionWrapper from "../container/SectionWrapper";
import { styles } from "../styles";
import { slideIn } from "../utilities/motion";

type FormKeys = "name" | "email" | "message";

type RequestState = "idle" | "loading" | "success" | "error";

// TODO: Add validation and error handling
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<{ [key in FormKeys]: string }>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{
    [key in FormKeys & "request"]: false | string;
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
    if (!formData.name)
      setFormErrors((prev) => ({ ...prev, name: "Name is required" }));
    if (!formData.email)
      setFormErrors((prev) => ({ ...prev, email: "Email is required" }));
    else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      setFormErrors((prev) => ({ ...prev, email: "Enter a valid email" }));
    if (!formData.message)
      setFormErrors((prev) => ({ ...prev, message: "Message is required" }));

    return Object.values(formData).some((x) => !!x);
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
          to_email: "mohamedh.aly@hotmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setRequestState("success");
          setFormData({ name: "", email: "", message: "" });
          setFormErrors({ name: false, email: false, message: false });
        },
        (error) => {
          setRequestState("error");
          // alert("Something went wrong");
        },
      );
  }

  return (
    <SectionWrapper id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 mt-12">
              <label htmlFor="name" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  id={"name" satisfies FormKeys}
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all focus-visible:outline-2 focus-visible:outline-secondary"
                />
              </label>
              <label htmlFor="email" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  id={"email" satisfies FormKeys}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all focus-visible:outline-2 focus-visible:outline-secondary"
                />
              </label>
              <label htmlFor="message" className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  id={"message" satisfies FormKeys}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message here"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all focus-visible:outline-2 focus-visible:outline-secondary resize-none"
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
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
            </div>
          </form>
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
