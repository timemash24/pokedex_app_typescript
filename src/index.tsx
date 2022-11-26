import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50000,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: (error) => console.log((error as any).message),
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
