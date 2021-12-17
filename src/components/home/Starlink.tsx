import { Button } from '../shared/Button';

const Starlink = () => {
	return (
		<div>
			<h1>Starlink</h1>
			<h2>
				Colossal constellation of 1892 low-orbit satellites to provide low
				latency, broadband internet system
			</h2>
			<h2>
				Detailed info about coordinates and motion of all starlink satellites
				Data Updated Hourly
			</h2>
			<Button name='Explore Starlink' />
			<blockquote>
				<p>
					“You want to wake up in the morning and think the future is going to
					be great - and that’s what being a spacefaring civilization is all
					about. It’s about believing in the future and thinking that the future
					will be better than the past. And I can’t think of anything more
					exciting than going out there and being among the stars.”
				</p>
				<figcaption>-Elon Musk</figcaption>
			</blockquote>
		</div>
	);
};

export default Starlink;
