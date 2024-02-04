import { ReactNode } from "react";

interface SidebarProps {
    children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
    return (
        <div className="flex bg-blue-900 h-screen max-md:hidden md:w-72 lg:w-72 justify-center items-center flex-col">
            {children}
        </div>
    );
}
