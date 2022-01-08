import Head from 'next/head';
import React from 'react';
import HomePage from './HomePage';

const Home = () => {
	<Head>
		<title>SpaceX Project</title>
		<meta property='og:image' content='/spacex-img.jpg' />
		<meta property='og:image:type' content='image/jpeg' />
		<meta property='og:image:width' content='200' />
		<meta property='og:image:height' content='200' />
	</Head>;
	return <HomePage />;
};

export default Home;
