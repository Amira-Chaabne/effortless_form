import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface AppContext {
  isSigningUp: boolean;
  formSubmitted: boolean;
  setIsSigningUp: Dispatch<SetStateAction<boolean>>;
  setFormSubmitted: Dispatch<SetStateAction<boolean>>;
  switchForm: () => void;
}

const AppContext = createContext<AppContext | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isSigningUp, setIsSigningUp] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const switchForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <AppContext.Provider
      value={{
        isSigningUp,
        setIsSigningUp,
        switchForm,
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const state = useContext(AppContext);

  if (state === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return state;
}

export default AppContext;
