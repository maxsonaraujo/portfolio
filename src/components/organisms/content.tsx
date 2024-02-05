'use client'
import { ReactNode } from "react";

interface ContentProps {
    children?: ReactNode;
    anchor: string
}


export function Content({ children, anchor }: ContentProps) {

    return (
        <div id={anchor+"-section"} className="pt-4 snap-start flex items-center min-h-screen pl-20 pr-20" onMouseEnter={() => {

            const elementsOff = document.getElementsByClassName("sidebar-menu-item");
            for (let i = 0; i < elementsOff.length; i++) {
                const element = elementsOff[i];
                element.classList.remove("underline");

            }
            const element = document.getElementById(anchor);
            if (element) {
                if (!element.classList.contains("underline")) {
                    element.classList.add("underline");
                }
            }
        }}>
            {children}
        </div>
    );
}
