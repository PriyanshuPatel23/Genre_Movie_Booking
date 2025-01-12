import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RestrictBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return null;
};

export default RestrictBackNavigation;
