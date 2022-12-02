import { useMutation } from "react-query";

export const use[FCName] = () =>
  useMutation(
    () => {
      // return fetch("/api/data") as json
      return "Hello";
    },
    {
      onMutate: (variables) => {
        // A mutation is about to happen!
        // Optionally return a context containing data to use when for example rolling back
      },
      onError: (error, variables, context) => {
        // An error happened!
        console.log(`rolling back optimistic update with id ${context}`);
      },
      onSuccess: (data, variables, context) => {
        // Boom baby!
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
    }
  );
