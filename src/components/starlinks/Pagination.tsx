import { useState } from 'react';

// type paginationProps = {
// 	onChangePage:
// 	dataPerPage: number;
// 	totalData: number;
// };

const Paginate = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(10);

	const indexOfLastPost = currentPage * dataPerPage;
	const indexOfFirstPost = indexOfLastPost - dataPerPage;

	const pageRange = 10;

	const HandlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div>
			{/* <Pagination
				prevPageText='Prev'
				nextPageText='Next'
				firstPageText='First'
				lastPageText='Last'
				activePage={currentPage}
				itemsCountPerPage={dataPerPage}
				totalItemsCount={totalData}
				pageRangeDisplayed={pageRange}
				// onChange={handlePageChange}
			/> */}
		</div>
	);
};

export default Paginate;
