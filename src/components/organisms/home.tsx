import { Content } from "@/components/organisms/content";
import { SidebarAvatar } from "../molecules/sidebarAvatar";


interface HomeProps {
    anchor: string,
    infor: {
        wellcome: string,
        presentation: string,
    },
    imageSrc: string
}
export function Home(props: HomeProps) {

    console.log(props.imageSrc)
    return (<Content anchor={props.anchor}>
        <div className="flex flex-col bg-white h-min space-y-8 max-md:mt-5">

            <div className="max-md:inline-flex hidden w-full flex place-content-center">
                <SidebarAvatar src={props.imageSrc} />
            </div>

            <div>
                <div className="flex max-md:text-5xl text-7xl font-extrabold">
                    <h1 className="mr-4">{props.infor.wellcome}</h1>
                </div>
            </div>
            <div>
                <span>
                    {props.infor.presentation}
                </span>
            </div>

        </div>
    </Content>
    )
}