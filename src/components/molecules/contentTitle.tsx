import { ReactNode } from "react";

interface ContentTitleProps {
    children?: ReactNode
}
export function ContentTitle({ children }: ContentTitleProps) {

    return (
        <div>
            <div className="flex text-7xl font-extrabold">
                <h1 className="mr-4">{children}</h1>
            </div>
        </div>
    )
}