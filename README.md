# templates_for_react #

It's a small cli to help the creation of react component or xstate machine.

## Installation ##

```text
npm install templates_for_react -g
```

## Usage ##

```text
cft 
1. Is your version of react >= 18 ? (y/N)
2. Please choose which template to use
    * Component
    * ComponentWithStorybook
    * Context
    * Function
    * Hook
    * StoreZustand
    * Machine
    * AssignXstate
    * GuardXstate
    * useMutation
    * useQuery
3. Please write a name
4.  Select a target directory for your component

```

___

## Templates Available ##

* [Context](#context)

* [ComponentStory](#componentstory)

* [Component](#component)

* [Function](#function)

* [Hook](#hook)

* [Store Zustand](#storezustand)

* [useMutation Hooks](#usemutation-hooks)

* [useQuery Hooks](#usequery-hooks)

* [Machine xstate](#machine-xstate)

* [Action Assign xstate](#action-assign-xstate)

* [Guard xstate](#guard-xstate)

___

## Context ##

### Structure Context ###

```text
[Name]
|--[Name]Provider.tsx
|--use[Name]Context.ts
|--index.ts
```

### Details Context ###

* [Name]Provider.tsx

```typescript
import * as React from "react";

export interface [Name]ContextProps { }

export const [Name] = React.createContext<[Name]ContextProps>({});

export const [Name]Provider = ({ children }: PropsWithChildren<[Name]ContextProps>) => {
  return <[Name].Provider value={{}}>{children}</[Name].Provider>;
};

```

* use[Name]Context.ts

```typescript
import * as React from "react";
import { [Name] } from "./[Name]Provider";

export const use[Name]Context = () => {
  const context = React.useContext([Name]);

  // Uncomment if your context doesn't have reasonable defaults
  //   if (context === undefined) {
  //     throw new Error(
  //       "use[Name]Context must be used within a [Name]Provider"
  //     );
  //   }

  return context;
};

```

* index.ts

```typescript
export { [Name]Provider } from "./[Name]Provider";
export {  use[Name]Context } from "./use[Name]Context";
```

___

## ComponentStory ##

### Structure ComponentStory ###

```text
[Name]
|--[Name].spec.tsx
|--[Name].stories.tsx
|--[Name].tsx
|--index.ts
```

### Details ComponentStory ###

* [Name].spec.tsx

```typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import [Name], { [Name]Props } from './[Name]';

describe('<[Name] />', () => {
    it('should render', () => {
        const { container }  = render(<[Name] />);
        expect(container).toBeInTheDocument();
    });
});
```

* [Name].stories.tsx

```typescript
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import [Name], { [Name]Props } from './[Name]';

export default {
    title: "/[Name]",
    component: [Name],
} as Meta;

const Template: Story<[Name]Props> = (args) => {
    return <[Name] {...args} />;
};

export const Default = Template.bind({});
```

* [Name].tsx

```typescript
import * as React from 'react';

export interface [Name]Props {}

const [Name]: React.FC<[Name]Props> = ({}) => {
    return <div>[Name]</div>
};

```

* index.ts

```typescript
export { [Name] } from "./[Name]";
```

___

## Component ##

### Structure Component ###

```text
[Name]
|--[Name].spec.tsx
|--[Name].tsx
```

### Details Component ###

* [Name].spec.tsx

```typescript
import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { [Name] } from '../[Name]';

describe('[Name]', () => {
    afterEach(() => {
        cleanup();
    });
    it('should render [Name]', () => {
        // Given

        // When
        const { container } = render(<[Name] />);

        //Then
        expect(container).toBeInTheDocument();
    });
});
```

* [Name].tsx

```typescript
import * as React from 'react';

export interface [Name]Props {

}

export const [Name]: React.FC<[Name]Props> = () => {
    return (
        <div>
            [Name]
        </div>
    );
};

[Name].displayName = '[Name]';
```

## Function ##

### Structure Function ###

```text
[Name]
|--[Name].spec.ts
|--[Name].ts
```

### Details Function ###

* [Name].spec.ts

```typescript
import { [Name] } from "./[Name]";

describe('[Name]', () => {
    it('should ', () => {
        
    });
});
```

* [Name].ts

```typescript
export const [Name] = () => {

};
```

___

## Hook ##

### Structure Hook ###

```text
use[Name]
|--use[Name].spec.tsx
|--use[Name].tsx
```

### Details Hook ###

* use[Name].tsx

```typescript
import * as React from "react";

export const use[Name] = () => {
  return () => {
    return 2;
  };
};

```

* use[Name].spec.tsx

```typescript
import { renderHook } from '@testing-library/react-hooks';
import { [Name] } from './[Name]';

describe('[Name]', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => [Name]());
        const value = result.current();
        expect(value).toEqual(2);
    });
});

```

__

## StoreZustand ##

### Structure StoreZustand ###

```text
[Name]
|--action
    |--index.ts
    |--setIndex.tsx
|--use[Name].tsx
```

### Details StoreZustand ###

* use[Name].tsx

```typescript
import create, { StoreApi } from "zustand";
import { setIndex } from "./actions";

interface [Name]State {
    index: number;
};
interface [Name]Actions {
    setIndex: (value: number) => void;
};

const initialState: [Name]State = {
    index: 0,
}

export type [Name]StoreType = [Name]State & [Name]Actions;

export type Set[Name]Store = StoreApi<[Name]StoreType>["setState"];
export type Get[Name]Store = StoreApi<[Name]StoreType>["getState"];

export const use[Name]Store = create<[Name]State & [Name]Actions>(set => ({
    ...initialState,
    setIndex: setIndex(set)
}))
```

* action/setIndex.ts

```typescript
import { Set[Name]Store } from "../use[Name]Store";

export const setIndex = (set: Set[Name]Store) => (value: number) =>
  set(_state => ({
    index: value
  }));

```

* action/index.ts

```typescript
export { setIndex } from "./setIndex";
```

__

## useMutation Hooks ##

### Structure useMutation Hooks ###

```text
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.tsx
```

### Details useMutation Hooks ###

* --[Name].spec.tsx

```jsx
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider  } from 'react-query';

const renderWithClient = (client: QueryClient, ui: React.ReactElement) => {
    const { rerender, ...result } = render(
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    );
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(
                <QueryClientProvider client={client}>
                    {rerenderUi}
                </QueryClientProvider>
            ),
    };
};

describe('use[Name]', () => {
    const queryCache = new QueryCache();
    const mutationCache = new MutationCache();
    const queryClient = new QueryClient({ queryCache, mutationCache });

   it("should ", async () => {
    function Page() {
      const { mutate, data = { label: "" } } = use[Name]();

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

```

* --[Name].tsx

```typescript
import { useMutation } from 'react-query';

const [Name] = () => useMutation(() => {
  // return fetch("/api/data") as json
  return "Hello";
}, {
    onMutate: variables => {
        // A mutation is about to happen!
    
        // Optionally return a context containing data to use when for example rolling back
      },
      onError: (error, variables, context) => {
        // An error happened!
        console.log(`rolling back optimistic update with id ${context}`)
      },
      onSuccess: (data, variables, context) => {
        // Boom baby!
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
});

export default [Name];
```

* --index.tsx

```typescript
 export { default } from './[Name]';
```

___

## useQuery Hooks ##

### Structure useQuery Hooks ###

```text
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.tsx
```

### Details useQuery Hooks ###

* --[Name].spec.tsx

```typescript
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { [Name] } from './[Name]';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('[Name]', () => {
    it('should ', async () => {        
        const { result, waitFor } = renderHook(() => [Name](), { wrapper });

        await waitFor(() => result.current.isSuccess);
        
        expect(result.current.data).toEqual("Hello");
    });
});
```

* --[Name].tsx

```typescript
import { useQuery } from 'react-query';

const [Name] = () => {
    return useQuery("queryHooks", () => {
        // return fetch("/api/data") as json
        return "Hello";
    });
};

export default [Name];
```

* --index.tsx

```typescript
export { default } from './[Name]';
```

___

## Machine XState ##

### Structure Machine XState ###

```text
[Name]
|--actions
    |--actionExample.spec.ts
    |--actionExample.ts
|--guards
    |--guardExample.spec.ts
    |--guardExample.ts
|--services
|--types
    |--index.ts
|--[Name]Machine.ts
```

### Details Machine XState ###

* --actions > actionExample.spec.ts

```typescript
```

* --actions > actionExample.ts

```typescript
```

* --guards > guardExample.spec.ts

```typescript
```

* --actions > guardExample.ts

```typescript
```

* --types > index.ts

```typescript
```

* --[Name]Machine.ts

```typescript

```

__

## Action Assign XState ##

### Structure Action Assign XState ###

```text
[Name]Assign
|--[Name]Assign.spec.ts
|--[Name]Assign.ts
```

### Details Action Assign XState ###

* [Name]Assign.spec.ts

```typescript
import { TimerContext } from '../../types';
import { ActionTypes } from "xstate";
import { [Name]Assign, [Name]Assignment } from "./assign[Name]";

describe('assign[Name]', () => {
    it('should return object', () => {
        const result = assign[Name];
        expect(result.type).toEqual(ActionTypes.Assign);
    });
    it('should return assignement', () => {
        const context: Context = {
            
        }
        const newContext = assignment[Name](context, { type: ''});
        expect(newContext.).toEqual();
    });
});
```

* [Name]Assign.ts

```typescript
import { ActionTypes, AssignAction } from "xstate";

export const [Name]Assignment = (context: Context, event: Event): Partial<Context> => {
    return {
        elapsed: event.value
    };
}

export const [Name]Assign : AssignAction<Context, Event> = {
    type: ActionTypes.Assign,
    assignment: [Name]Assignment
}
```

__

## Guard XState ##
