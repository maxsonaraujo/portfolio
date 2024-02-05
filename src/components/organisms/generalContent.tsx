import { Content } from "@/components/organisms/content";
import { ContentTitle } from "../molecules/contentTitle";
import { ContentTopic } from "../molecules/contentTopic";


type projects = {
    title: string,
    subTitle: string,
    description: string,
    content: string,
    links: string[]
    screens: string[]
}

interface ProjectProps {
    anchor: string,
    infor: {
        title?: string,
        projects: projects[]
    }
}
export function GeneralContent(props: ProjectProps) {

    return (<Content anchor={props.anchor}>
        <div className="space-y-8 pb-10">
            <ContentTitle>
                {props.infor.title}
            </ContentTitle>
            {props.infor.projects.map((item, index) => {
                return (<ContentTopic
                    key={index + props.anchor}
                    title={item.title}
                    subTitle={item.subTitle}
                    description={item.description}
                    links={item.links}
                    screens={item.screens}
                >
                    {item.content}
                </ContentTopic>)
            })}
        </div>
    </Content>
    )
}