import React, { useState } from 'react';
import Link from 'next/link';

import { VscChromeClose } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
	const [openSideBar, setOpenSideBar] = useState(false);
	return (
		<div className='flex absolute w-screen justify-center py-6 text-xl z-50 '>
			<div className='flex justify-between items-center w-11/12 h-full'>
				<Link href='/'>
					<a className='uppercase text-base md:text-2xl text-stone-100 font-bold'>
						SpacexInfo
					</a>
				</Link>
				{openSideBar ? (
					<div
						onClick={() => {
							setOpenSideBar(false);
						}}
						className='md:hidden flex relative left-1 cursor-pointer z-50'
					>
						<VscChromeClose className='text-4xl text-stone-50' />
					</div>
				) : (
					<div
						onClick={() => {
							setOpenSideBar(true);
						}}
						className='md:hidden flex relative left-1 cursor-pointer'
					>
						<AiOutlineMenu className='text-4xl text-stone-50' />
					</div>
				)}
				<div
					className={`md:w-auto flex flex-col justify-center items-center space-y-10 md:space-y-0 md:flex-row fixed md:relative inset-y-0 right-0 bg-stone-900 md:bg-opacity-0 overflow-x-hidden md:space-x-14 lg:space-x-20 text-stone-50 h-full ${
						openSideBar ? 'w-60' : 'w-0'
					}`}
				>
					<Link href='/'>
						<a
							onClick={() => {
								setOpenSideBar(false);
							}}
							className='hover:border-b md:border-stone-50'
						>
							Home
						</a>
					</Link>
					<Link href='/Rockets'>
						<a
							onClick={() => {
								setOpenSideBar(false);
							}}
							className='md:hover:border-b border-stone-50'
						>
							Rockets
						</a>
					</Link>
					<Link href='/Launches'>
						<a
							onClick={() => {
								setOpenSideBar(false);
							}}
							className='md:hover:border-b border-stone-50'
						>
							Launches
						</a>
					</Link>
					<Link href='/StarLink'>
						<a
							onClick={() => {
								setOpenSideBar(false);
							}}
							className='md:hover:border-b border-stone-50'
						>
							Starlink
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
