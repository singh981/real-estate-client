/**
 * Providers Component
 * 
 * Client component that wraps the application with necessary providers:
 * - Redux store provider for state management
 * - (Future providers like theme, auth, etc. would be added here)
 */

"use client";

import StoreProvider from "@/state/redux";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <StoreProvider>{children}</StoreProvider>;
}
