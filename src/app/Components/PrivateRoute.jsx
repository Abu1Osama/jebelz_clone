import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const Auth =
  localStorage.getItem("isAuthenticated") || ""
  useEffect(() => {
    const isAuthenticated = () => {
     
      return Auth ? true : false;
    };

    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [Auth]);

  return <>{children}</>;
};

export default PrivateRoute;
