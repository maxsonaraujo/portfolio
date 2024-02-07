import { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../atoms/carousel";
import { ContentCarousel } from "./contentCarousel";

interface ContentTopicProps {
    title?: string,
    subTitle?: string,
    description?: string,
    links?: string[],
    screens?: string[],
    children?: ReactNode
}
export function ContentTopic({ children, title, subTitle, description, links, screens }: ContentTopicProps) {

    return (
        <div>
            <div >
                <div className="flex max-md:text-xl text-3xl font-extrabold">
                    <h1 className="mr-4">{title}</h1>
                </div>
                <div className="flex font-extrabold text-gray-600">
                    <span>{subTitle}</span>
                </div>
                <div className="flex text-gray-600">
                    <span>{description}</span>
                </div>
            </div>

            <div className="flex max-md:flex-col flex-row">
                <div className="w-full mt-4 text-gray-600 whitespace-pre-line">
                    {children}
                </div>

                {screens && screens.length > 0 ? <div>
                    <ContentCarousel
                        imgs={screens}
                    />
                </div> : <></>}
            </div>
            <div className="mt-6">
                {links ? links.map((item, index) => {
                    return (<div key={index + "anchor-link"} className="flex text-gray-600">
                        <a href={item}>{item}</a>
                    </div>)
                }) : <></>}
            </div>

        </div >
    )
}