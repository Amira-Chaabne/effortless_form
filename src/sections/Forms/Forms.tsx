import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/contexts/AppContext";

export default function Forms() {
  const { isSigningUp } = useAppContext();

  return (
    <div className="col-span-4 md:col-span-3 p-4 bg-white rounded-md py-12">
      <AnimatePresence mode="wait">
        {isSigningUp ? (
          <motion.div
            key="signUp"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <SignUp />
          </motion.div>
        ) : (
          <motion.div
            key="signIn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <SignIn />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
