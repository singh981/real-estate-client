'use client';

/**
 * Landing Page Component
 * 
 * Serves as the main entry point for non-authenticated users
 * Features a hero section, property listings, how-it-works guide,
 * testimonials, and call-to-action sections
 */

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/state/redux';

// import { useIsMobile } from '@/hooks/use-mobile';

export default function LandingPage() {
	// const isMobile = useIsMobile();
	const { filters } = useAppSelector(state => state.global);

	return (
		<div className='w-full container mx-auto px-4 py-8'>
			{/* Hero Section */}
			<section className='w-screen relative flex flex-col items-center justify-center py-60 text-center text-white -ml-[calc(50vw-50%)]'>
				{/* Background image with overlay */}
				<div className='absolute inset-0 z-0'>
					<Image
						src='/landing-splash.jpg'
						alt='Beautiful rental property'
						fill
						className='object-cover brightness-50'
						priority
					/>
				</div>

				{/* Content */}
				<div className='z-10 max-w-4xl mx-auto px-4'>
					<h1 className='text-3xl md:text-5xl font-bold mb-4'>
						Start your journey to finding the perfect place to call home
					</h1>
					<p className='text-xl mb-8'>
						Explore our wide range of rental properties tailored to fit your lifestyle and needs!
					</p>

					{/* Search bar */}
					<div className='flex w-full max-w-2xl mx-auto rounded-lg overflow-hidden'>
						<input
							type='text'
							placeholder='Search by city, neighborhood, or address'
							className='flex-grow py-3 px-6 text-black focus:outline-none h-12'
						/>
						<Button className='bg-[#D64A4A] hover:bg-[#C43C3C] px-6 h-12 rounded-l-none'>Search</Button>
					</div>
				</div>
			</section>

			{/* Featured Properties */}
			<section className='py-12'>
				<h2 className='text-3xl font-bold mb-8'>Featured Properties</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{/* Property cards would go here */}
					{[1, 2, 3].map(item => (
						<div
							key={item}
							className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
						>
							<div className='relative h-48 w-full'>
								<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
							</div>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>Property Title</h3>
								<p className='text-gray-600 mb-2'>Location: {filters.location}</p>
								<p className='text-gray-600 mb-4'>$1,500/month</p>
								<Button variant='outline' className='w-full'>
									View Details
								</Button>
							</div>
						</div>
					))}
				</div>
				<div className='text-center mt-8'>
					<Button asChild variant='outline'>
						<Link href='/properties'>View All Properties</Link>
					</Button>
				</div>
			</section>

			{/* How It Works */}
			<section className='py-12 bg-gray-50 rounded-lg p-8'>
				<h2 className='text-3xl font-bold mb-8 text-center'>How It Works</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-2xl font-bold text-primary'>1</span>
						</div>
						<h3 className='text-xl font-semibold mb-2'>Search Properties</h3>
						<p className='text-gray-600'>Browse our extensive catalog of rental properties.</p>
					</div>
					<div className='text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-2xl font-bold text-primary'>2</span>
						</div>
						<h3 className='text-xl font-semibold mb-2'>Contact Landlord</h3>
						<p className='text-gray-600'>Directly message property managers to schedule viewings.</p>
					</div>
					<div className='text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-2xl font-bold text-primary'>3</span>
						</div>
						<h3 className='text-xl font-semibold mb-2'>Move In</h3>
						<p className='text-gray-600'>Complete the application process and move into your new home.</p>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-12'>
				<h2 className='text-3xl font-bold mb-8 text-center'>What Our Users Say</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='bg-white p-6 rounded-lg shadow-sm border'>
						<p className='italic mb-4'>
							Found my dream apartment in just a week! The filtering options made it so easy to narrow
							down exactly what I was looking for.
						</p>
						<p className='font-semibold'>- Sarah Johnson</p>
					</div>
					<div className='bg-white p-6 rounded-lg shadow-sm border'>
						<p className='italic mb-4'>
							As a property manager, this platform has made it incredibly simple to list my properties and
							connect with quality tenants.
						</p>
						<p className='font-semibold'>- Michael Rodriguez</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 bg-primary text-white rounded-lg p-8 text-center'>
				<h2 className='text-3xl font-bold mb-4'>Ready to Find Your New Home?</h2>
				<p className='text-xl mb-6 max-w-2xl mx-auto'>
					Join thousands of satisfied renters who found their perfect property through our platform.
				</p>
				<Button asChild size='lg' variant='secondary'>
					<Link href='/signup'>Get Started Today</Link>
				</Button>
			</section>
		</div>
	);
}
