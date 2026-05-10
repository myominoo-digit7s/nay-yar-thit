import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, ExternalLink } from "lucide-react";

const SoftwarePortfolio = () => {
    const projects = [
        {
            name: 'Enterprise HRMS',
            category: 'Enterprise Application',
            tech: 'Laravel, Vue 3, Tailwind',
            thumbnail: '/images/corporate/hr.png'
        },
        {
            name: 'The Sports Corner (TSC)',
            category: 'Mobile App',
            tech: 'Laravel, Flutter, REST API, Youtube',
            thumbnail: '/images/corporate/the-sports-corner.png',
            link: 'https://thesportscorners.com/'
        },
        {
            name: 'Monster Dash',
            category: 'Mobile Game',
            tech: 'Flutter, Flame Engine',
            thumbnail: '/images/corporate/monster-dash.png',
            link: 'https://monster-dash---pixel-escape.web.app/'
        }
    ];

    return (
        <section className="py-16 bg-slate-50/50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Featured Projects</h3>
                    <p className="text-slate-600 mt-2">A glimpse into our recent technical deliveries and digital solutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => {
                        const CardContent = (
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                                {/* Thumbnail or Fallback */}
                                <div className="aspect-video w-full relative bg-slate-100 flex items-center justify-center">
                                    {project.thumbnail ? (
                                        <Image src={project.thumbnail} alt={project.name} fill className="object-cover" />
                                    ) : (
                                        <div className="text-center">
                                            <Code className="text-slate-300 group-hover:text-emerald-300 transition-colors" size={32} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 bg-slate-50 group-hover:bg-emerald-50 rounded-lg flex items-center justify-center transition-colors">
                                            <Code className="text-slate-400 group-hover:text-emerald-500" size={16} />
                                        </div>
                                        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                                        {project.name}
                                        {project.link && <ExternalLink size={14} className="text-slate-400" />}
                                    </h4>
                                    <p className="text-sm text-slate-500 font-medium mt-auto">
                                        {project.tech}
                                    </p>
                                </div>
                            </div>
                        );

                        if (project.link) {
                            return (
                                <Link key={index} href={project.link} target="_blank" className="block h-full">
                                    {CardContent}
                                </Link>
                            );
                        }

                        return (
                            <div key={index} className="h-full">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>

                {/* <div className="mt-10 text-center">
                    <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-2 mx-auto transition-colors">
                        View All Projects <ArrowRight size={16} />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default SoftwarePortfolio;