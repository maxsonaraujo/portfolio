import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel } from "../atoms/carousel"


interface ContentCarouselProps {
    imgs?: string[]
}
export const ContentCarousel = (props: ContentCarouselProps) => {

    let imgs = props.imgs ?? [];

    return (<Carousel className="mt-10 md:ml-10 lg:ml-20">
        <CarouselContent>
            {
                imgs.map((img,index) => {
                    return (
                        <CarouselItem key={"imgCarousel"+index}>
                            <div>
                                <img src={img} style={{ maxHeight: "300px", margin: "auto" }} />
                            </div>
                        </CarouselItem>
                    );
                })
            }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    )
}