export default function About() {
	return (
		<div className='flex flex-col text-center shadow-black shadow-lg items-center align-center mt-20 mx-8 sm:mx-20 p-8 sm:p-20 bg-[#242122] rounded-2xl'>
			<div className='flex flex-col mb-10'>
				<h1 className='heading'>About Us</h1>

				<h4 className='subheading'>Your Trusted Local Mechanic</h4>
			</div>

			<p className='body'>
				AutoWorx provides quality automotive care built on skill,
				transparency, and efficiency. Our technicians are trained across
				all major vehicle brands and use modern diagnostic tools to
				deliver accurate, timely solutions. We prioritize clear
				communication, fair pricing, and dependable workmanship on every
				job.
			</p>
		</div>
	);
}
