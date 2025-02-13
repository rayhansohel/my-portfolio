/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ZoomInMotion = ({ children, className }) => {
  const zoomIn = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div className={className} initial="hidden" animate="visible" variants={zoomIn}>
      {children}
    </motion.div>
  );
};

export default ZoomInMotion;
