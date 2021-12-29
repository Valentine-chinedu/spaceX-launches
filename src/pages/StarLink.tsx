import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { pageVariantsAnim } from '../animation';
import { useStarLink } from '../services/Queries';
import StarLinkInfo from '../components/starlinks/StarLinkInfo';
import Pagination from '../components/shared/Pagination';

const StarLink = () => {
	const { data } = useStarLink();
	console.log(data);

	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(10);

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = data! && data.slice(indexOfFirstData, indexOfLastData);

	const paginateFront = () => setCurrentPage(currentPage + 1);
	const paginateBack = () => setCurrentPage(currentPage - 1);

	return (
		<>
			<motion.div
				initial='initial'
				animate='in'
				exit='out'
				variants={pageVariantsAnim}
				className='flex justify-center bg-gradient-to-b from-black to-gray-900 pt-32'
			>
				<div className='w-3/5'>
					<StarLinkInfo starLinkData={currentData} />
					<Pagination
						dataPerPage={dataPerPage}
						totalData={data! && data?.length}
						paginateBack={paginateBack}
						paginateFront={paginateFront}
						currentPage={currentPage}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default StarLink;
