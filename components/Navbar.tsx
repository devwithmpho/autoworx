'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/Logo.svg';

interface NavItemProps {
	setActiveFunc: Function;
	pageName: string;
	active: boolean;
	children: string;
}

export default function Navbar() {
	const [active, setActive] = useState<string>('home');

	useEffect(() => {
		const sections = document.querySelectorAll('section[id]');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{
				threshold: 0.4,
			}
		);

		sections.forEach((sec) => observer.observe(sec));

		return () => observer.disconnect();
	}, []);

	return (
		<div className='w-full fixed z-10 bg-(--background-secondary) flex items-center justify-between py-4 px-12'>
			<div>
				<Link
					href='#home'
					className='cursor-pointer'
				>
					<Image
						src={logo}
						alt='Logo'
						height={50}
					/>
				</Link>
			</div>

			<div className='flex items-center justify-evenly gap-4'>
				<NavItem
					setActiveFunc={setActive}
					pageName='home'
					active={active === 'home'}
					children={'Home'}
				/>
				<NavItem
					setActiveFunc={setActive}
					pageName='about'
					active={active === 'about'}
					children={'About'}
				/>
				<NavItem
					setActiveFunc={setActive}
					pageName='services'
					active={active === 'services'}
					children={'Services'}
				/>
				<NavItem
					setActiveFunc={setActive}
					pageName='contact'
					active={active === 'contact'}
					children={'Contact'}
				/>
			</div>
		</div>
	);
}

function NavItem({ setActiveFunc, pageName, active, children }: NavItemProps) {
	const href = `#${pageName}`;

	return (
		<a
			href={href}
			className={`nav-item ${active && 'nav-item-active'}`}
			onClick={() => setActiveFunc(pageName)}
		>
			{children}
		</a>
	);
}
