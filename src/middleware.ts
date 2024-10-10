import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/settings(.*)', '/']);

export default clerkMiddleware((auth, req) => {
	const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
	if (!publishableKey) {
		throw new Error('Publishable key not found');
	}
	if (isProtectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
