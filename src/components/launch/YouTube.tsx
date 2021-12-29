import ReactPlayer from 'react-player/youtube';

type youTubeProps = {
	youTubeId: string;
};

const YouTube = ({ youTubeId }: youTubeProps) => {
	let yt = <></>;

	if (youTubeId)
		yt = (
			<div className='h-[28rem]'>
				<ReactPlayer
					controls
					width='100%'
					height='100%'
					url={`https://www.youtube.com/watch?v=${youTubeId}`}
				/>
			</div>
		);
	return <div>{yt}</div>;
};

export default YouTube;
