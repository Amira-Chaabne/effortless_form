import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import { SignInForm } from "./SignInForm";
import { useAppContext } from "@/contexts/AppContext";
import Appreciation from "../Appreciation";
import { AnimatePresence, motion } from "framer-motion";

export default function SignIn() {
  const { formSubmitted } = useAppContext();

  return (
    <>
      {formSubmitted ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="signUp"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Appreciation signIn={true} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <AlreadyMember />
          <div className="w-full md:max-w-2xl mx-auto">
            <Text className="text-3xl font-bold my-12">
              Sign In to Help Save Nature
            </Text>
            <SignInForm />
          </div>
        </>
      )}
    </>
  );
}
