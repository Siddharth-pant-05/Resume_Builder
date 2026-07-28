import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="bg-linear-to-r from-white via-green-200/60 to-white mt-40 pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-wrap justify-between gap-12 pb-12 border-b border-gray-300/60">

                    {/* Brand */}
                    <div className="max-w-xs">
                        <a href="/">
                            <img src="logo.svg" alt="logo" className="h-11 w-auto" />
                        </a>
                        <p className="mt-4 text-[13px] text-gray-500 leading-relaxed">
                            Build a resume that gets you noticed — fast, free, and yours.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="flex flex-wrap gap-16 md:gap-24">
                        <div>
                            <p className="text-slate-800 font-semibold text-sm">Product</p>
                            <ul className="mt-3 space-y-2 text-[13px] text-gray-500">
                                <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
                                <li><Link to="/app" className="hover:text-green-600 transition">Dashboard</Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-slate-800 font-semibold text-sm">Account</p>
                            <ul className="mt-3 space-y-2 text-[13px] text-gray-500">
                                <li><Link to="/app?state=register" className="hover:text-green-600 transition">Sign Up</Link></li>
                                <li><Link to="/app?state=login" className="hover:text-green-600 transition">Login</Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-slate-800 font-semibold text-sm">Connect</p>
                            <div className="flex items-center gap-4 mt-3">
                                <a href="https://github.com/Siddharth-pant-05/Resume_Builder" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-green-600 transition">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/siddharth-pant-19294927a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-green-600 transition">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-[13px] text-gray-500">
                    <p>© 2026 Resume Builder. All rights reserved.</p>
                    <p>Made for job seekers everywhere.</p>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}