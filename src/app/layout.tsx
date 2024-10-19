import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Xconnect | Kết nối xã hội tối ưu',
	description: 'Xconnect - Ứng dụng mạng xã hội hiện đại, giúp bạn kết nối, chia sẻ, và khám phá những khoảnh khắc cùng cộng đồng.',
	openGraph: {
		title: 'Xconnect | Kết nối xã hội tối ưu',
		description: 'Xconnect - Ứng dụng mạng xã hội hiện đại: Kết nối, chia sẻ và khám phá những khoảnh khắc đặc biệt cùng bạn bè và cộng đồng.',
		url: 'https://demo-website.live/',
		siteName: 'Xconnect',
		images: [
			{
				url: 'https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/cover.png',
				alt: 'Hình ảnh đại diện cho Xconnect',
			},
		],
		locale: 'vi_VN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Xconnect | Kết nối xã hội tối ưu',
		description: 'Xconnect - Ứng dụng mạng xã hội hiện đại: Kết nối, chia sẻ và khám phá những khoảnh khắc đặc biệt cùng bạn bè và cộng đồng.',
		creator: '@Xconnect',
		images: ['https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/cover.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="vi">
				<Head>
					<title>Xconnect | Kết nối xã hội tối ưu</title>
					<meta
						name="description"
						content="Xconnect - Ứng dụng mạng xã hội hiện đại: Kết nối, chia sẻ và khám phá những khoảnh khắc đặc biệt cùng bạn bè và cộng đồng."
					/>
					<meta
						name="keywords"
						content="Xconnect, Mạng xã hội, Kết nối, Chia sẻ, Trò chuyện, Cộng đồng, Next.js"
					/>
					<meta
						name="author"
						content="Xconnect"
					/>
					<meta
						property="og:title"
						content="Xconnect | Kết nối xã hội tối ưu"
					/>
					<meta
						property="og:description"
						content="Xconnect - Ứng dụng mạng xã hội hiện đại: Kết nối, chia sẻ và khám phá những khoảnh khắc đặc biệt cùng bạn bè và cộng đồng."
					/>
					<meta
						property="og:type"
						content="website"
					/>
					<meta
						property="og:url"
						content="https://demo-website.live/"
					/>
					<meta
						property="og:image"
						content="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/cover.png"
					/>
					<meta
						property="og:image:alt"
						content="Hình ảnh đại diện cho Xconnect"
					/>
					<meta
						property="og:locale"
						content="vi_VN"
					/>
					<meta
						property="og:site_name"
						content="Xconnect"
					/>

					<meta
						name="twitter:card"
						content="summary_large_image"
					/>
					<meta
						name="twitter:title"
						content="Xconnect | Kết nối xã hội tối ưu"
					/>
					<meta
						name="twitter:description"
						content="Xconnect - Ứng dụng mạng xã hội hiện đại: Kết nối, chia sẻ và khám phá những khoảnh khắc đặc biệt cùng bạn bè và cộng đồng."
					/>
					<meta
						name="twitter:image"
						content="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/cover.png"
					/>
					<meta
						name="twitter:image:alt"
						content="Hình ảnh đại diện cho Xconnect"
					/>
					<meta
						name="twitter:site"
						content="@Xconnect"
					/>
					<meta
						name="twitter:creator"
						content="@Xconnect"
					/>

					<meta
						http-equiv="Cache-Control"
						content="no-cache, no-store, must-revalidate"
					/>
					<meta
						http-equiv="Pragma"
						content="no-cache"
					/>
					<meta
						http-equiv="Expires"
						content="0"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link
						rel="canonical"
						href="https://demo-website.live/"
					/>
					<link
						rel="icon"
						href="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/favicon.jpg"
						sizes="16x16"
						type="image/x-icon"
					/>
					<link
						rel="apple-touch-icon"
						href="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/apple-touch-icon.jpg"
						sizes="180x180"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/favicon-32x32.jpg"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/favicon-16x16.jpg"
						sizes="16x16"
					/>
					<link
						rel="preload"
						as="image"
						href="https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/cover.png"
					/>
					<meta
						name="robots"
						content="index, follow"
					/>
					<meta
						http-equiv="Content-Type"
						content="text/html; charset=UTF-8"
					/>
					<meta
						name="application-name"
						content="Xconnect"
					/>
					<meta
						name="theme-color"
						media="(prefers-color-scheme: light)"
						content="#5468A9"
					/>
					<meta
						name="theme-color"
						media="(prefers-color-scheme: dark)"
						content="#5468A9"
					/>
					<meta
						name="copyright"
						content="Xconnect"
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'http://schema.org',
								'@type': 'Organization',
								name: 'Xconnect',
								url: 'https://demo-website.live',
								logo: 'https://res.cloudinary.com/tedydev/image/upload/Xconnect/xconnect/favicon.png',
								sameAs: ['https://www.facebook.com/xconnect', 'https://twitter.com/Xconnect'],
							}),
						}}
					/>
				</Head>
				<body className={inter.className}>
					<div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
						<Navbar />
					</div>
					<div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</div>
				</body>
			</html>
		</ClerkProvider>
	);
}