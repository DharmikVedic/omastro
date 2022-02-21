import { useContext } from "react";
import { Loginc } from "./logincontext";

const useUserData = () => {
  const context = useContext(Loginc);
  return {
    ...context,
  };
};

export default useUserData;
