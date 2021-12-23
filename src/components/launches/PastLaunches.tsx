import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import { pageVariantsAnim } from '../../animation';
import { usePastLaunches } from '../../services/Queries';
import LaunchInfo from './LaunchInfo';

const PastLaunches = () => {
	const { data } = usePastLaunches();

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
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
		>
			{currentData &&
				currentData
					.sort()
					.map((launch) => (
						<LaunchInfo
							name={launch.name}
							date={launch.date_local}
							number={launch.flight_number}
							rocket={launch.rocket}
							patch_small={launch.links.patch.small}
							details={launch.details}
							status={launch.success ? 'successfull' : 'failed'}
							id={launch.id}
						/>
					))}

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
		</motion.div>
	);
};

export default PastLaunches;
