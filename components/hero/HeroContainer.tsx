import { VIDEO_CLIPS } from "@/lib/constants";
import { CarouselHero } from "./CarouselHero";

export const HeroContainer = () => {
  return (
    <section className="relative w-full min-h-dvh">
      <CarouselHero contentMediaUrls={VIDEO_CLIPS} />
    </section>
  );
};
