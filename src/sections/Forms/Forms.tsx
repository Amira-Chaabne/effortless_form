import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { AuthContext } from "@/contexts/AuthContext";
import { useState } from "react";

export default function Forms() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const switchForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <AuthContext.Provider value={{ isSigningUp, switchForm }}>
      <div className="col-span-4 md:col-span-3 p-4 bg-white rounded-md py-12">
        {isSigningUp ? <SignUp /> : <SignIn />}
      </div>
    </AuthContext.Provider>
  );
}
