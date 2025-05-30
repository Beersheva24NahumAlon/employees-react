import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from './components/ui/provider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routing.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </Provider>
  </>
)
