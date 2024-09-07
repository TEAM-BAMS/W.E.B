"use client";

import { Github } from "lucide-react";

const Footer = () => {
    return (        <a href="https://github.com/shadil-rayyan/aicodetranslator" target="_blank" rel="noopener noreferrer" className="absolute top-3 right-5 md:right-8 z-40"><button type="button" className="px-6 backdrop-blur hover:px-8 py-2 rounded-full relative bg-neutral-800/50 dark:text-white text-xs md:text-sm hover:shadow-xl border border-neutral-700 hover:shadow-green-600/[0.2] transition-all duration-300"><div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-green-500 to-transparent"></div><span className="relative z-20 flex flex-row justify-center items-center text-white text-sm">Github <Github className="ml-2" size={16} /></span></button></a>

    )
}

export default Footer
