import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  DotButton,
} from "@/components/ui/carousel"

const PhotoCarousel = () => {
  // const { slides, options } = props
  // const [emblaRef, emblaApi] = useEmblaCarousel(options)
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        // dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <CarouselItem key={index} className="basis-1/2">
            <div className="rounded-[20px] overflow-hidden">
              <div>
                <div className="flex aspect-video items-center justify-center overflow-hidden">
                  <img src="public/images/image.jpeg" alt="" />
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <div className={`flex justify-center items-center mt-4`}>
        <DotButton />
      </div>
    </Carousel>
  )
}

export default PhotoCarousel
