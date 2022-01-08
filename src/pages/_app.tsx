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
				<title>SpaceX Info</title>

				<meta property='og:image' content='/spacex-img.jpg' />
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='200' />
				<meta property='og:image:height' content='200' />
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
