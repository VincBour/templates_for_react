import { useQuery } from "react-query";

export const [FCName] = () => {
  return useQuery("queryHooks", () => {
    // return fetch("/api/data") as json
    return "Hello";
  });
};
