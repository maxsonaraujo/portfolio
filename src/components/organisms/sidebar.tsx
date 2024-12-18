'use client'
import { IDictionary } from "@/lib/dictionary";
import React, { ReactNode, useState } from "react";
import { Button } from "../atoms/button";
import { LangSelector } from "../molecules/langSelector";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface SidebarProps {
    children: ReactNode;
    dictionary: IDictionary
}

export function Sidebar({ children, dictionary }: SidebarProps) {

    const [opened, setOpened] = useState(false);

    const classClosed = "max-md:hidden";

    const classOpenNav = "z-40 max-md:fixed flex flex-col max-md:w-full md:w-72 lg:w-72 h-screen bg-blue-900";

    const childrenWithProps: React.ReactNode[] = [];
    React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const props = { ...child.props, setOpened: (value: boolean) => setOpened(value) }
            const nChild = { ...child, props };
            childrenWithProps.push(nChild);
        }
        return child;
    });

    return (
        <>

            <div className={cn(classOpenNav, opened ? "" : classClosed)}>

                <div className="flex flex-1 font-bold justify-center items-center flex-col">
                    {childrenWithProps}
                </div>
                <div className="flex text-xs text-center p-4 text-white">
                    {dictionary.copyright}
                </div>
            </div>


            <div className="md:hidden lg:hidden flex flex-row-reverse bg-white w-full mt-[-7px] fixed z-50">
                <Button variant="ghost" size="default" className="h-14"
                    onClick={() => {
                        setOpened(!opened)
                    }}
                >
                    <HamburgerMenuIcon className="h-6 w-6" />
                </Button>
            </div>

            <LangSelector
                dictionary={dictionary}
            />

        </>
    );
}
