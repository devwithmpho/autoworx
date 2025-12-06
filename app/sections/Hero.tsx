import Image from 'next/image';

import Button from '@/components/Button';

import car from '@/public/car.png';
import overlay from '@/public/Hero Overlay.png';

export default function Hero() {
	return (
		<div className='py-20 px-30 w-full min-h-screen flex justify-center items-center'>
			<Image
				src={overlay}
				alt='Background Image'
				quality={100}
				priority
				fill
				className='object-cover -z-10'
			/>

			<div className='w-full grid grid-cols-2'>
				<div className='pt-10 w-full flex flex-col'>
					<h1 className='title mb-4'>
						Auto<span className='text-(--primary)'>Worx</span> -
						Precision Care for Every Car
					</h1>

					<p className='body mb-4'>
						Reliable, affordable mechanical service designed to keep
						your vehicle running at its best. From routine
						maintenance to full repairs, we get you back on the road
						with confidence.
					</p>

					<Button children='Book Your Service Today' />
				</div>

				<div className='h-full w-full flex items-center justify-center'>
					<Image
						src={car}
						alt='Car'
						width={1000}
						className='absolute translate-x-[30%] z-[-1]'
					/>
				</div>
			</div>
		</div>
	);
}
