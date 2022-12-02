import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const renderWithClient = (client: QueryClient, ui: React.ReactElement) => {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      ),
  };
};

describe("use[FCName]", () => {
  const queryCache = new QueryCache();
  const mutationCache = new MutationCache();
  const queryClient = new QueryClient({ queryCache, mutationCache });

  it("should ", async () => {
    function Page() {
      const { mutate, data = { label: "" } } = use[FCName]();

      return (
        <div>
          <h1 data-testid="title">{data["label"]}</h1>
          <button onClick={() => mutate()}>mutate</button>
        </div>
      );
    }
    const { getByTestId, getByText } = renderWithClient(queryClient, <Page />);

    expect(getByTestId("title").textContent).toBe("");
    fireEvent.click(getByText("mutate"));

    await waitFor(() => getByTestId("title"));

    expect(getByTestId("title").textContent).toBe();
  });
});
