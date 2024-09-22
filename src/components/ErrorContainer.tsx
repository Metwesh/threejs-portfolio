import { motion } from "framer-motion";

export default function ErrorContainer(props: {
  children: React.ReactNode;
  error: false | string;
}) {
  return (
    <>
      {props.children}
      <motion.p
        className="mt-1 text-red-500 text-sm"
        initial="hidden"
        animate={props.error ? "visible" : "hidden"}
        variants={{
          hidden: {
            height: 0,
            marginInlineStart: "0.5rem",
            marginBottom: "2rem",
            opacity: 0,
          },
          visible: {
            height: "1.5rem",
            marginInlineStart: "0.5rem",
            marginBottom: "0.5rem",
            opacity: 1,
          },
        }}
      >
        {props.error}
      </motion.p>
    </>
  );
}
