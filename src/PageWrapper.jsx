// // PageWrapper.jsx
// import { motion } from "framer-motion";

// const variants = {
//   initial: {
//     opacity: 0,
//     y: 40,
//     scale: 0.98,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   },
//   exit: {
//     opacity: 0,
//     y: -40,
//     scale: 0.98,
//   },
// };

// const transition = {
//   duration: 0.5,
//   ease: [0.4, 0, 0.2, 1],
// };

// export default function PageWrapper({ children }) {
//   return (
//     <motion.div
//       className="page-wrapper"
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// }


// // PageWrapper.jsx
// import { motion } from "framer-motion";

// const variants = {
//   initial: {
//     opacity: 0,
//     x: "100%",   // start from right
//   },
//   animate: {
//     opacity: 1,
//     x: "0%",     // center
//   },
//   exit: {
//     opacity: 0,
//     x: "-100%",  // exit to left
//   },
// };

// const transition = {
//   duration: 0.5,
//   ease: [0.4, 0, 0.2, 1],
// };

// export default function PageWrapper({ children }) {
//   return (
//     <motion.div
//       className="page-wrapper"
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// }


// // PageWrapper.jsx
// import { motion } from "framer-motion";

// const variants = {
//   initial: {
//     opacity: 0,
//     x: 100,   // start from right
//   },
//   animate: {
//     opacity: 1,
//     x: 0,     // center
//   },
//   exit: {
//     opacity: 0,
//     x: -100,  // exit to left
//   },
// };

// const transition = {
//   duration: 0.5,
//   ease: [0.4, 0, 0.2, 1],
// };

// export default function PageWrapper({ children }) {
//   return (
//     <motion.div
//       className="page-wrapper"
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// }

// PageWrapper.jsx
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}