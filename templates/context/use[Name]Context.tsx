import { useContext } from "react";
import { [Name] } from "./[Name]Provider";

const use[Name]Context = () => {
  const context = useContext([Name]);

  // Uncomment if your context doesn't have reasonable defaults
  //   if (context === undefined) {
  //     throw new Error(
  //       "use[Name]Context must be used within a [Name]Provider"
  //     );
  //   }

  return context;
};