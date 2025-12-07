import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function Home() {
	return (
		<div className='overflow-x-hidden min-w-screen flex flex-col items-center justify-center'>
			<section id='home'>
				<Hero />
			</section>

			<section id='about'>
				<About />
			</section>

			<section id='services'>
				<Services />
			</section>

			<section
				id='contact'
				className='mb-20'
			>
				<Contact />
			</section>
		</div>
	);
}
