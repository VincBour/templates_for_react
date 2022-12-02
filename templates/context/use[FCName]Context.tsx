import { useContext } from "react";
import { [FCName] } from "./[FCName]Provider";

const use[FCName]Context = () => {
  const context = useContext([FCName]);

  // Uncomment if your context doesn't have reasonable defaults
  //   if (context === undefined) {
  //     throw new Error(
  //       "use[FCName]Context must be used within a [FCName]Provider"
  //     );
  //   }

  return context;
};