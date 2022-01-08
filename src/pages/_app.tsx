import { AppProps } from 'next/app';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from '../components/NavBar';

import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();

	return (
		<>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default MyApp;
