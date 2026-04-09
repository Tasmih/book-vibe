import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6">
            <div className="max-w-3xl w-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10 md:p-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20 text-sm text-red-300 mb-6">
                    <span>404</span>
                    <span>Page Not Found</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
                    Oops!
                </h1>

                <p className="mt-6 text-xl md:text-2xl font-medium text-slate-200">
                    Something went wrong.
                </p>

                <p className="mt-3 max-w-xl mx-auto text-slate-400 leading-8 text-base md:text-lg">
                    The page you are trying to visit may have been removed, renamed,
                    or is temporarily unavailable.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="px-7 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition duration-300 shadow-lg"
                    >
                        Back to Home
                    </button>

                    <button className="px-7 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition duration-300">
                        Try Again
                    </button>
                </div>

                <div className="mt-14 flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-inner">
                        ⚠️
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;