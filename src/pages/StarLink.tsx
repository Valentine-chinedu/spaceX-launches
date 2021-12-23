import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { pageVariantsAnim } from '../animation';
import { useStarLink } from '../services/Queries';
import StarLinkInfo from '../components/starlinks/StarLinkInfo';
import Pagination from 'react-js-pagination';

const StarLink = () => {
	const { data } = useStarLink();

	// const [commentData, setcommentData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(6);

	const indexOfLastPost = currentPage * dataPerPage;
	const indexOfFirstPost = indexOfLastPost - dataPerPage;
	const currentData = data! && data.slice(indexOfFirstPost, indexOfLastPost);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

	const totalData = data! && data.length;
	const pageRange = 9;

	return (
		<>
			<motion.div
				initial='initial'
				animate='in'
				exit='out'
				variants={pageVariantsAnim}
			>
				<StarLinkInfo starLinkData={currentData} />
				<Pagination
					prevPageText='Prev'
					nextPageText='Next'
					firstPageText='First'
					lastPageText='Last'
					activePage={currentPage}
					itemsCountPerPage={dataPerPage}
					totalItemsCount={totalData}
					pageRangeDisplayed={pageRange}
					onChange={handlePageChange}
				/>

				{/* <Paginate
					onChangePage={pageHandler}
					dataPerPage={dataPerPage}
					totalData={data! && data.length}
				/> */}
			</motion.div>
		</>
	);
};

export default StarLink;
