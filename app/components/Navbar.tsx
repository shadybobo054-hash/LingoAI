"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
	{ label: "Home", href: "/", color: "#3D9BFF" },
	{ label: "Lessons", href: "/lessons", color: "#2477D1" },
	{ label: "Vocabulary", href: "/vocabulary", color: "#0E8F69" },
	{ label: "Listening", href: "/listening", color: "#0A7E99" },
	{ label: "Courses", href: "/courses", color: "#6A52EE" },
	{ label: "Practice", href: "/practice", color: "#CE543B" },
	{ label: "AI Tutor", href: "/ai-tutor", color: "#565AD7" },
];

export default function Navbar() {
	const [language, setLanguage] = useState<"EN" | "AR">("EN");
	const [dark, setDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);

	return (
		<header className="sada-navbar">
			<div className="page-container flex min-h-[58px] items-center justify-between gap-5">
				<Link href="/" className="flex shrink-0 items-center gap-2.5">
					<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3D9BFF] text-sm font-semibold text-white">
						●
					</span>
					<span className="font-display text-xl font-semibold text-[var(--ink)]">
						Sada
					</span>
				</Link>

				<nav
					aria-label="Main navigation"
					className="hidden items-center gap-5 lg:flex"
				>
					{navigation.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="flex items-center gap-2 text-sm font-medium text-[var(--ink2)] transition hover:text-[var(--ink)]"
						>
							<span
								aria-hidden="true"
								className="h-1.5 w-1.5 rounded-full"
								style={{ backgroundColor: item.color }}
							/>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-2">
					<div className="flex items-center rounded-full border border-[var(--line2)] bg-[var(--surf)] p-0.5 text-[11px] font-semibold">
						{(["EN", "AR"] as const).map((item) => (
							<button
								key={item}
								type="button"
								aria-pressed={language === item}
								onClick={() => setLanguage(item)}
								className={`rounded-full px-2.5 py-1 transition ${language === item ? "bg-[#2477D1] text-white" : "text-[var(--ink3)] hover:text-[var(--ink)]"}`}
							>
								{item}
							</button>
						))}
					</div>

					<button
						type="button"
						aria-label="Toggle dark mode"
						aria-pressed={dark}
						onClick={() => setDark((current) => !current)}
						className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] text-sm text-[var(--ink)] transition hover:border-[var(--brand)]"
					>
						☼
					</button>
				</div>
			</div>

			<nav aria-label="Mobile navigation" className="border-t border-[var(--line)] lg:hidden">
				<div className="page-container flex gap-5 overflow-x-auto py-2.5 text-xs font-medium text-[var(--ink2)]">
					{navigation.map((item) => (
						<Link key={item.label} href={item.href} className="flex shrink-0 items-center gap-1.5">
							<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
							{item.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
