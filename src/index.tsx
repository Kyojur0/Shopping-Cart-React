import React, { ReactNode } from 'react';
import App from './App';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
