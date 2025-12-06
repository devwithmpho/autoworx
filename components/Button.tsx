import { PropsWithChildren } from 'react';

export default function Button({ children }: PropsWithChildren) {
	return (
		<button className='p-2 w-fit cursor-pointer font-bold bg-(--primary) rounded-lg hover:bg-[#e06e4b] hover:scale-110 transition-all duration-150 ease-in-out'>
			{children}
		</button>
	);
}
