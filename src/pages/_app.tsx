import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from '../components/NavBar';

import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();

	return (
		<>
			<Head>
				<title>SpaceX Info</title>
			</Head>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
};

export default MyApp;