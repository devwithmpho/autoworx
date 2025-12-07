import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
	imgSource: StaticImageData;
	title: string;
	description: string;
}

export default function ServiceCard({
	imgSource,
	title,
	description,
}: ServiceCardProps) {
	return (
		<div className='w-full z-1 hover:p-1 mb-10 py-10 rounded-lg shadow-black shadow-2xl bg-(--primary) flex flex-col items-center justify-center hover:scale-105 transition-all duration-150 ease-in-out hover:bg-[#ec5121] sm:mb-0'>
			<div className=' mb-10'>
				<Image
					src={imgSource}
					alt='Icon'
					width={100}
					className='invert z-1'
				/>
			</div>

			<div className='text-center'>
				<h6 className='text-[19px] font-bold mb-10'>{title}</h6>

				<p className='body'>{description}</p>
			</div>
			<div className=''></div>
		</div>
	);
}
