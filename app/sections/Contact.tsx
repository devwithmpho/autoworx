'use client';

import Image from 'next/image';

import Button from '@/components/Button';

import instaIcon from '@/public/instagram.png';
import twitterIcon from '@/public/twitter.png';
import facebookIcon from '@/public/facebook.png';

export default function Contact() {
	return (
		<div className='bg-[#332f30] min-h-full flex flex-col items-center justify-center m-4 sm:mx-0 sm:py-10 sm:grid sm:grid-cols-2 text-center rounded-2xl'>
			<div className='px-8 sm:px-20 text-center flex flex-col'>
				<h4 className='heading mt-4 sm:mt-0'>Contact Us</h4>

				<p className='body'>
					Have a question or need a quote? The AutoWorx team is ready
					to assist. Reach out and we'll respond as soon as possible.
				</p>

				<div className='my-4 flex justify-center items-center gap-4'>
					<a
						href={'https://www.instagram.com'}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src={instaIcon}
							alt='Instagram'
							height={40}
						/>
					</a>

					<a
						href={'https://www.facebook.com'}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src={facebookIcon}
							alt='Facebook'
							height={40}
						/>
					</a>

					<a
						href={'https://www.twitter.com'}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src={twitterIcon}
							alt='Twitter'
							height={40}
						/>
					</a>
				</div>

				<p className='body'>Phone: +27 00 000 0000</p>
				<p className='body'>Email Address: help@autoworx.com</p>

				<p className='mb-8 sm:mb-0 mt-5 body font-semibold text-[22px]'>
					Location: 123 Main Road, Johannesburg
				</p>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className='flex flex-col bg-(--background-secondary) p-4 mx-8 mb-4 sm:mb-0 sm:mx-0 sm:mr-10 rounded-2xl shadow-black shadow-md'
			>
				<p className='body font-bold mb-4'>
					Use the form below to book a service or request more
					information.
				</p>

				<div className='text-start'>
					<div className='flex flex-col'>
						<label
							htmlFor='name'
							className='label'
						>
							Name:
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter your name'
							className='input w-full'
						/>
					</div>

					<div className='flex flex-col'>
						<label
							htmlFor='email'
							className='label'
						>
							Email Address:
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email address'
							className='input w-full'
						/>
					</div>

					<div className='flex flex-col'>
						<label
							htmlFor='message'
							className='label'
						>
							How can we help you?
						</label>
						<input
							type='text'
							name='message'
							id='message'
							placeholder='Enter a message'
							className='input w-full h-15'
						/>
					</div>

					<Button>Submit</Button>
				</div>
			</form>
		</div>
	);
}
