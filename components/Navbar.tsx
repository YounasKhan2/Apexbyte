"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#services", label: "Services" },
	{ href: "#portfolio", label: "Portfolio" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all ${
				scrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : ""
			}`}
		>
			<nav
				className="container flex items-center justify-between py-4"
				aria-label="Main"
			>
				<Link href="#home" className="flex items-center gap-2">
					<img
						src="/icons/cubixbyte-wordmark.svg"
						alt="CubixByte logo"
						className="h-8 w-auto animate-float"
						loading="eager"
						decoding="async"
						width={120}
						height={36}
					/>
				</Link>
				<ul className="hidden md:flex items-center gap-8 text-sm">
					{navItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className="link-underline text-slate-700 hover:text-slate-900"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="md:hidden">
					<button
						aria-label="Menu"
						aria-expanded={open}
						aria-controls="mobile-menu"
						onClick={() => setOpen((v) => !v)}
						className="rounded-xl border border-slate-200 px-3 py-2"
					>
						<span className="block h-0.5 w-5 bg-slate-800 mb-1" />
						<span className="block h-0.5 w-5 bg-slate-800 mb-1" />
						<span className="block h-0.5 w-5 bg-slate-800" />
					</button>
				</div>
				<Link
					href="#contact"
					className="hidden md:inline-block rounded-2xl bg-slate-900 text-white px-4 py-2 hover:shadow-glow transition"
				>
					Start a Project
				</Link>
			</nav>
			{open && (
				<div
					id="mobile-menu"
					className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm"
					aria-label="Mobile menu"
				>
					<div className="container py-3">
						<ul className="grid gap-2">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50"
									>
										{item.label}
									</Link>
								</li>
							))}
							<li>
								<Link
									href="#contact"
									onClick={() => setOpen(false)}
									className="block rounded-xl bg-slate-900 text-white px-3 py-2 text-center"
								>
									Start a Project
								</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</header>
	);
}
