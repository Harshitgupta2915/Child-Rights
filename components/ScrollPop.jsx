// components/ScrollPop.js
import { motion } from "framer-motion";

export default function ScrollPop({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}   // hidden, slightly down & small
      whileInView={{ opacity: 1, y: 0, scale: 1 }}   // pop up
      viewport={{ once: false, amount: 0.2 }}        // ❗ animate every time
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
