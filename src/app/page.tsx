'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Input from './components/Input';

const client = new QueryClient();

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={client}>
        <Input />
      </QueryClientProvider>
    </main>
  );
}
