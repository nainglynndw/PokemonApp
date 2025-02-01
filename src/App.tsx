import React from 'react';
import RootNavigator from './navigation';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
