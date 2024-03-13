import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const useAuthRedirect = (redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && window.location.pathname !== "/auth/regist") {
        navigate(redirectPath);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, redirectPath]);
};
