import Link from 'next/link';
export default function Footer() {
	return (
		<div className='bg-(--background-secondary) w-full py-2 flex items-center justify-center'>
			<p className='text-center'>
				© 2025 AutoWorx. All Rights Reserved - Designed By{' '}
				<a
					href='https://www.github.com/devwithmpho'
					target='_blank'
					rel='noopener noreferrer'
					className='underline'
				>
					DevWithMpho
				</a>
				.
			</p>
		</div>
	);
}
