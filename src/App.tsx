import { FC } from "react";
import { AppRoutes } from "./routes";
import { RootStoreContext } from "./hooks/useStore";
import RootStore from "./store/root-store";

export const App: FC = () => {
  return (
    <>
      <RootStoreContext.Provider value={new RootStore()}>
        <AppRoutes />
      </RootStoreContext.Provider>
    </>
  );
};
