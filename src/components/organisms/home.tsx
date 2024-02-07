import { Content } from "@/components/organisms/content";


interface HomeProps {
    anchor: string,
    infor: {
        wellcome: string,
        presentation: string
    }
}
export function Home(props: HomeProps) {

    return (<Content anchor={props.anchor}>
        <div className="flex flex-col bg-white h-min space-y-8 max-md:mt-5">
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