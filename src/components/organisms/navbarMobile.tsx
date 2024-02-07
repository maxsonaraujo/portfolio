import { IDictionary } from "@/lib/dictionary";
import { ReactNode } from "react";
import { Button } from "../atoms/button";
import { LangSelector } from "../molecules/langSelector";

interface NavbarMobileProps {
    children: ReactNode;
    dictionary: IDictionary
}

export function NavbarMobile({ children, dictionary }: NavbarMobileProps) {
    console.log(children);

    return (
        <div className="flex flex-col max-md:w-full md:w-72 lg:w-72 h-screen bg-blue-900">
            <LangSelector
                dictionary={dictionary}
            />
            <div className="flex flex-1 font-bold justify-center items-center flex-col">
                {children}
            </div>
            <div className="flex text-xs text-center p-4 text-white">
                {dictionary.copyright}
            </div>
        </div>
    );
}
