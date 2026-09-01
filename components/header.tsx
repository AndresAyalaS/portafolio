"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { useTheme } from "@/utils/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Andres
                            <span className="text-secondary ml-2">Ayala</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ id, logo: Logo, label, src }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar ${label}`}
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                <Logo size={30} strokeWidth={1} />
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                            className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            {theme === 'dark' ? (
                                <Sun size={24} className="text-yellow-400" />
                            ) : (
                                <Moon size={24} className="text-blue-600" />
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;