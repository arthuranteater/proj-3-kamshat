import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Page Not Found</h1>
      </motion.div>
    );
  }


export default NotFound;
