import { createContext, useContext } from "react";
import RootStore from "../store/root-store";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error("Оберните приложение в провайдер");
  }

  return context;
};
