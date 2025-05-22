import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { NAVBAR_HEIGHT } from '@/lib/constants';

export default function Header() {
	return (
		// <header className='w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between'>
		<header
			className='w-full top-0 left-0 fixed z-50 shadow-xl'
			style={{ height: `${NAVBAR_HEIGHT}px`, backgroundColor: 'white' }}
		>
			<div className='w-full py-3 px-8 bg-primary-700 text-white flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link href='/' className='cursor-pointer hover:!text-primary-300' scroll={false}>
						<div className='flex items-center gap-3'>
							<Image src='/logo.svg' alt='Rentiful logo' width={24} height={24} />
							<div>
								<span className='text-xl font-bold'>RENT</span>
								<span className='text-xl font-normal text-secondary-700'>IFUL</span>
							</div>
						</div>
					</Link>
				</div>
				{/* Search bar - centered */}
				<div className='hidden lg:block mx-8 text-center'>
					<span className='text-base text-white/80'>
						Discover your perfect rental apartment with our advanced search
					</span>
				</div>

				{/* Auth buttons */}
				<div className='flex items-center gap-4'>
					<Link href='/signin'>
						<Button
							variant='outline'
							className='font-medium bg-[#1E1E1E] text-white border-white hover:bg-white hover:text-primary-700 hover:border-white rounded-lg'
						>
							Sign In
						</Button>
					</Link>
					<Link href='/signup'>
						<Button className='bg-red-600 hover:bg-white hover:text-primary-700 hover:border-white text-white font-medium border-none rounded-lg'>
							Sign Up
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
