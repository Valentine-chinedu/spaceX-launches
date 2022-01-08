import Head from 'next/head';
import React from 'react';
import HomePage from './HomePage';

const Home = () => {
	return (
		<>
			<Head>
				<title>SpaceX Info</title>

				<meta
					property='og:image'
					content='http://space-x-launches-iota.vercel.app/spacex-img.jpg'
				/>
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='200' />
				<meta property='og:image:height' content='200' />
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
