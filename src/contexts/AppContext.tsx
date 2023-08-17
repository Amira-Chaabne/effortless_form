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
  setIsSigningUp: Dispatch<SetStateAction<boolean>>;
  switchForm: () => void;
}

const AppContext = createContext<AppContext | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isSigningUp, setIsSigningUp] = useState<boolean>(true);

  const switchForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <AppContext.Provider value={{ isSigningUp, setIsSigningUp, switchForm }}>
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
