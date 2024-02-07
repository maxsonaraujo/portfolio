import { Content } from "@/components/organisms/content";
import { ContentTitle } from "../molecules/contentTitle";
import { ContentTopic } from "../molecules/contentTopic";


type skills = {
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
        skills: skills[]
    }
}
export function Skills(props: ProjectProps) {

    return (<Content anchor={props.anchor}>
        <div className="space-y-8 pb-10 max-md:mt-10">
            <ContentTitle>
                {props.infor.title}
            </ContentTitle>
            {props.infor.skills.map((item, index) => {
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