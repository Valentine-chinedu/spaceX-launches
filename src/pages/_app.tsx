import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from '../components/NavBar';

import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>SpaceX Info</title>
			</Head>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default MyApp;
