import ServiceCard from '@/components/ServiceCard';

import maintenanceImage from '@/public/maintenance.png';
import brakeImage from '@/public/brake.png';
import oilImage from '@/public/oil.png';

export default function Services() {
	return (
		<div className='mt-20'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='heading'>Services</h1>

				<h4 className='subheading'>
					Comprehensive Automotive Services
				</h4>
			</div>

			<div className='grid grid-cols-3 mx-20 my-10'>
				<ServiceCard
					imgSource={maintenanceImage}
					title='Diagnostics & Repairs'
					description='Engine checks, warning light diagnostics, and repairs to mechanical and electrical components.'
				/>
				<ServiceCard
					imgSource={brakeImage}
					title='Brake Systems'
					description='Inspection, pad and disc replacement, fluid flushes, and complete brake servicing.'
				/>
				<ServiceCard
					imgSource={oilImage}
					title='Routine Maintenance'
					description='Oil changes, filters, fluids, spark plugs, and scheduled service to keep your car performing smoothly.'
				/>
			</div>
		</div>
	);
}
