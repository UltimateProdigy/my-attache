export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Testimonials", link: "#testimonials" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "I prioritize client collaboration, fostering open communication ",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently building a JS Animation library",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Ecobazar",
		des: "A full-stack e-commerce platform for organic groceries featuring real-time inventory management, secure payments, and an intuitive shopping experience. Built with performance and sustainability in mind.",
		img: "/eco.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
		link: "https://ecoshop-two.vercel.app/",
	},
	{
		id: 2,
		title: "Three60",
		des: "A comprehensive task management solution with collaborative features, real-time updates, and customizable workflows. Helps teams and individuals track projects from inception to completion.",
		img: "/three.png",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/stream.svg",
			"/c.svg",
		],
		link: "https://three60.vercel.app/",
	},
	{
		id: 3,
		title: "Bank Dash",
		des: "A modern banking dashboard that visualizes financial data through interactive charts, tracks spending patterns, and provides detailed transaction analytics with customizable reporting features.",
		img: "/bdash.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
		link: "IN-PROGRESS",
	},
	{
		id: 4,
		title: "Shihami",
		des: "An elegantly designed NFT marketplace landing page featuring smooth animations, interactive 3D elements, and a responsive layout that showcases digital artworks in their best light.",
		img: "/shihami.png",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/three.svg",
			"/gsap.svg",
		],
		link: "https://shihami-tau.vercel.app/",
	},
	{
		id: 5,
		title: "Weather App",
		des: "An intuitive weather application providing real-time forecasts, interactive radar maps, and detailed meteorological data with beautiful visualizations and location-based recommendations.",
		img: "/weather.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
		link: "https://weather-app-silk-xi-89.vercel.app/",
	},
];

export const testimonials = [
	{
		quote: "Ayobami's frontend expertise was instrumental in scaling our platform. His ability to translate complex requirements into intuitive user interfaces while maintaining clean, performant code is remarkable. What truly sets him apart is his proactive approach to problem-solving and his commitment to staying ahead of industry trends.",
		name: "Promise Shittu",
		title: "Backend Engineer, Tech Hub",
	},
	{
		quote: "Working with Ayobami was transformative for our product team. His deep understanding of user experience, combined with technical excellence, helped us reduce development cycles by 30%. He has this unique ability to bridge the gap between design vision and technical implementation, making him an invaluable asset to any project.",
		name: "Obaleye Kehinde",
		title: "Product Manager, Tech Hub",
	},
	{
		quote: "Ayobami's contributions to our mobile app development were exceptional. His expertise in React Native and attention to cross-platform consistency helped us achieve a seamless user experience on both iOS and Android. His work ethic and commitment to quality set new standards for our development team.",
		name: "Maksym Pryimak",
		title: "CEO, FICY",
	},
	{
		quote: "I had the pleasure of working closely with Ayobami on several high-stakes projects. His technical skills are matched by his ability to mentor others and contribute meaningfully to architectural decisions. He consistently delivered robust solutions that exceeded client expectations while maintaining excellent code quality.",
		name: "Ehile Godwin",
		title: "Frontend Developer, Varens SoftTech",
	},
];

export const companies = [
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/app.svg",
		nameImg: "/appName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "stream",
		img: "/s.svg",
		nameImg: "/streamName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Lead Frontend Developer - The Tech Hub (Nigeria)",
		desc: "Led a team of developers in building scalable web applications, implemented CI/CD pipelines, and established coding standards. Reduced page load times by 40% through performance optimization and modern frontend architecture.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
	{
		id: 2,
		title: "Frontend Developer - Picknfix (Nigeria)",
		desc: "Architected and delivered responsive web applications using React and Next.js. Implemented state management solutions and optimized API integrations, resulting in a 25% improvement in user engagement metrics.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
	{
		id: 3,
		title: "Frontend Developer - Varens SoftTech (USA)",
		desc: "Spearheaded the development of a cross-platform mobile application from conception to launch. Implemented complex UI components, integrated third-party APIs, and achieved a 4.5+ star rating on both app stores.",
		className: "md:col-span-2",
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Mobile App Developer - FICY (Ukraine)",
		desc: "Built and deployed cross-platform mobile applications using React Native. Implemented real-time features, offline functionality, and push notifications, while maintaining a consistent 99% crash-free rate.",
		className: "md:col-span-2",
		thumbnail: "/exp2.svg",
	},
	{
		id: 5,
		title: "Frontend Engineer Intern - ZURI (Nigeria)",
		desc: "Collaborated with senior developers to build and maintain web applications using React.js. Developed reusable component libraries, implemented responsive designs, and contributed to improving the platform's user experience.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/UltimateProdigy",
	},
	{
		id: 2,
		img: "/twit.svg",
		link: "https://x.com/codieprodigy",
	},
	{
		id: 3,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/akinola-ayobami-2a9a41270/",
	},
];
