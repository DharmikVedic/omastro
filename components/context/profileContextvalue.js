import { useContext } from "react";
import { Profile } from "./profileContext";

const useCurrentAstrologer = () => {
  const context = useContext(Profile);
  return {
    ...context,
  };
};

export default useCurrentAstrologer;
