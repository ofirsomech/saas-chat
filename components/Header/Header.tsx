import React from "react";
import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav
                className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
                <Logo />
                <div>
                    {/* LanguageSelect */}

                    {/* Session &&
                    ... 
                    */}
                </div>
            </nav>

            {/*  upgrade bunner */}
        </header>
    );
}
