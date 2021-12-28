interface IProps {
	dataPerPage: number;
	totalData: number;
	paginateBack: () => void;
	paginateFront: () => void;
	currentPage: number;
}

const Pagination = ({
	dataPerPage,
	totalData,
	paginateBack,
	paginateFront,
	currentPage,
}: IProps) => {
	return (
		<div className='py-2'>
			<div className='text-sm text-stone-100 mb-4'>
				<span className='mr-1.5'> Showing</span>
				<span className='font-medium mr-1.5'>
					{currentPage * dataPerPage - 10}
				</span>
				to
				<span className='font-medium'> {currentPage * dataPerPage} </span>
				of
				<span className='font-medium'> {totalData} </span>
				results
			</div>
			<nav className='block'></nav>
			<div>
				<nav className='relative space-x-4'>
					<a
						onClick={() => {
							paginateBack();
						}}
						href='#'
						className='relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-300'
					>
						<span>Previous</span>
					</a>

					<a
						onClick={() => {
							paginateFront();
						}}
						href='#'
						className='relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-300'
					>
						<span>Next</span>
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Pagination;
