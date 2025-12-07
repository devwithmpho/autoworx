import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserratFont = Montserrat({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'AutoWorx',
	description:
		'Reliable, affordable mechanical service designed to keep your vehicle running at its best. From routine maintenance to full repairs, we get you back on the road with confidence.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserratFont.className} antialiased flex overflow-x-hidden min-w-screen`}
			>
				<Navbar />

				<div className='w-full flex flex-col'>
					{children}

					<Footer />
				</div>
			</body>
		</html>
	);
}
