import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

interface IPropsSidebarAvatar {
    src: string
}
export function SidebarAvatar({ src }: IPropsSidebarAvatar) {

    return (
        <div className="bg-blue-700 h-min p-2 rounded-full mb-5 w-min">
            <Avatar>
                <AvatarImage src={src} />
                <AvatarFallback>ME</AvatarFallback>
            </Avatar>
        </div>
    )
}