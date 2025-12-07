import ServiceCard from '@/components/ServiceCard';

import maintenanceImage from '@/public/maintenance.png';
import brakeImage from '@/public/brake.png';
import oilImage from '@/public/oil.png';

export default function Services() {
	return (
		<div className='min-w-full mt-20 p-8 text-center sm:flex sm:flex-col sm:items-center sm:justify-center'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='heading'>Services</h1>

				<h4 className='subheading'>
					Comprehensive Automotive Services
				</h4>
			</div>

			<div className='min-w-full flex flex-col my-8 sm:grid sm:grid-cols-3 sm:my-10 sm:gap-8 sm:mb-0'>
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
