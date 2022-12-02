import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { [FCName] } from './[FCName]';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('[FCName]', () => {
    it('should ', async () => {        
        const { result, waitFor } = renderHook(() => [FCName](), { wrapper });

        await waitFor(() => result.current.isSuccess);
        
        expect(result.current.data).toEqual("Hello");
    });
});