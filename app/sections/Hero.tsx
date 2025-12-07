import Image from 'next/image';

import Button from '@/components/Button';

import car from '@/public/car.png';
import overlay from '@/public/Hero Overlay.png';

export default function Hero() {
	return (
		<div className='px-8 sm:px-10 min-w-full min-h-screen flex justify-center items-center'>
			<Image
				src={overlay}
				alt='Background Image'
				quality={100}
				priority
				fill
				className='object-cover -z-10'
			/>

			<div className='pt-20 sm:pt-0 min-w-full sm:relative sm:grid sm:grid-cols-2'>
				<div className='text-center pt-10 min-w-full flex flex-col'>
					<h1 className='title min-w-full mb-4'>
						Auto<span className='text-(--primary)'>Worx</span> -
						Precision Care for Every Car
					</h1>

					<p className='body mb-4'>
						Reliable, affordable mechanical service designed to keep
						your vehicle running at its best. From routine
						maintenance to full repairs, we get you back on the road
						with confidence.
					</p>

					<div className='self-center'>
						<Button children='Book Your Service Today' />
					</div>
				</div>

				<div className='sm:translate-x-80 md:translate-x-80 lg:translate-x-100 xl:translate-x-140 h-full w-full hidden sm:flex sm:relative items-center justify-center'>
					<Image
						src={car}
						alt='Car'
						width={1000}
						className='sm:absolute sm:scale-250 z-[-1]'
					/>
				</div>
			</div>
		</div>
	);
}
