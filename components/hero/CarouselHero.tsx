"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MediaItem } from "./MediaItem";

interface CarouselHero {
  contentMediaUrls: string[];
}

export const CarouselHero = (props: CarouselHero) => {
  const { contentMediaUrls = [] } = props;

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndexMedia, setCurrentIndexMedia] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndexMedia(api.selectedScrollSnap());
    });
  }, [api]);

  const handleEndedMedia = () => {
    api?.scrollNext();
  };

  return (
    <Carousel
      className="h-full min-h-dvh mask-radial-hero"
      opts={{ loop: true }}
      setApi={setApi}
    >
      <CarouselContent className="h-full min-h-dvh">
        {contentMediaUrls.map((url, index) => (
          <CarouselItem key={url} className="h-full min-h-dvh">
            <MediaItem
              url={url}
              canPlay={currentIndexMedia === index}
              onEnded={handleEndedMedia}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:left-7" variant="default" />
      <CarouselNext className="right-2 md:right-7" variant="default" />
    </Carousel>
  );
};
