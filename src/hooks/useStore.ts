import { createContext, useContext } from "react";
import { store } from "../store/root-store";

export const RootStoreContext = createContext<typeof store | null>(null);

export const useStore = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error("Оберните приложение в провайдер");
  }

  return context;
};
