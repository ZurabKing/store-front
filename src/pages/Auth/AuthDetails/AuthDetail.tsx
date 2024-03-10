import { onAuthStateChanged, signOut } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

interface IUser {
  email: string;
}

export const AuthDetail: FC = () => {
  const [authUser, setAuthUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: IUser | null) => {
      if (user) {
        const userData: IUser = {
          email: user.email || "",
        };
        navigate("/");
        setAuthUser(userData);
        setAuthUser(user);
      } else {
        setAuthUser(null);
        navigate("/auth");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>{authUser?.email}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : null}
    </div>
  );
};
