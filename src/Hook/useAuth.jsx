import { useContext } from "react";
import { Context } from "../App";

export default function useAuth() {
  return useContext(Context);
}
