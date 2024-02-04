'use client'
import { Button } from "@/components/atoms/button";

interface SidebarAvatarProps {
    anchor: string,
    label: string,
    isActive?: boolean
}
export function SidebarMenuItem({ anchor, label, isActive }: SidebarAvatarProps) {

    return (
        <div>
            <Button id={anchor} variant="link" className={`sidebar-menu-item text-white transition duration-300 ease-in-out ${isActive ? "underline" : ""}`} onClick={() => {
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