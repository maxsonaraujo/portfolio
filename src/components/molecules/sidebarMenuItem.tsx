'use client'
import { Button } from "@/components/atoms/button";
import { useState } from "react";

interface SidebarAvatarProps {
    anchor: string,
    label: string,
    isActive?: boolean,
    setOpened?: (opened: boolean) => void
}
export function SidebarMenuItem({ anchor, label, isActive, setOpened }: SidebarAvatarProps) {

    console.log(setOpened)
    return (
        <div>
            <Button id={anchor} variant="link" className={`sidebar-menu-item text-white transition duration-300 ease-in-out ${isActive ? "underline" : ""}`} onClick={() => {

                if (setOpened)
                    setOpened(false);

                const targetElement = document.getElementById(anchor + "-section");
                if (targetElement)
                    targetElement.scrollIntoView({ behavior: 'smooth' });


                const elementsOff = document.getElementsByClassName("sidebar-menu-item");
                for (let i = 0; i < elementsOff.length; i++) {
                    const element = elementsOff[i];
                    element.classList.remove("underline");

                }

                const element = document.getElementById(anchor);
                if (element) {
                    element.classList.add("underline")
                }



            }

            }>{label}</Button>
        </div>
    )
}