import { IDictionary } from "@/lib/dictionary";
import { ReactNode } from "react";
import { Button } from "../atoms/button";
import { LangSelector } from "../molecules/langSelector";

interface SidebarProps {
    children: ReactNode;
    dictionary: IDictionary
}

export function Sidebar({ children, dictionary }: SidebarProps) {


    return (
        <div className="flex flex-col h-screen bg-blue-900">
            <LangSelector
                dictionary={dictionary}
            />
            <div className="flex flex-1 font-bold max-md:hidden md:w-72 lg:w-72 justify-center items-center flex-col">
                {children}
            </div>
            <div className="flex text-xs text-center p-4 text-white">
                {dictionary.copyright}
            </div>
        </div>
    );
}
