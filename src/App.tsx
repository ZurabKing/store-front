import { FC } from "react";
import { AppRoutes } from "./routes";
import { RootStoreContext } from "./hooks/useStore";
import { store } from "./store/root-store";
import { useAuthRedirect } from "./hooks/useAuthRedirect";

export const App: FC = () => {
  useAuthRedirect("/auth");

  return (
    <>
      <RootStoreContext.Provider value={store}>
        <AppRoutes />
      </RootStoreContext.Provider>
    </>
  );
};
