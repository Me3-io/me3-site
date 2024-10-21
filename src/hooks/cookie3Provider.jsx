import { createContext, useContext } from "react";

const Cookie3Context = createContext();
export const Cookie3Provider = ({ children, value }) => {
  return <Cookie3Context.Provider value={value}>{children}</Cookie3Context.Provider>;
};

export const useCookie3 = () => {
  const context = useContext(Cookie3Context);
  return context;
};
