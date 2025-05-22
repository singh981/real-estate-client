import * as React from 'react';

// import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Property Rental Platform',
	description: 'Find your perfect rental property',
};

export default function NonDashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
			Footer
			{/* <Footer /> */}
		</div>
	);
}
