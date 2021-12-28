import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { pageVariantsAnim } from '../../animation';
import { usePastLaunches } from '../../services/Queries';
import LaunchInfo from './LaunchInfo';
import Pagination from './Pagination';

const PastLaunches = () => {
	const { data } = usePastLaunches();

	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(10);

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = data! && data.slice(indexOfFirstData, indexOfLastData);

	const paginateFront = () => setCurrentPage(currentPage + 1);
	const paginateBack = () => setCurrentPage(currentPage - 1);

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
				dataPerPage={dataPerPage}
				totalData={data! && data?.length}
				paginateBack={paginateBack}
				paginateFront={paginateFront}
				currentPage={currentPage}
			/>
		</motion.div>
	);
};

export default PastLaunches;
