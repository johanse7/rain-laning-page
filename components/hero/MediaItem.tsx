import { useEffect, useRef } from "react";

interface MediaItemProps {
  url: string;
  canPlay: boolean;
  onEnded?: () => void;
}

export const MediaItem = (props: MediaItemProps) => {
  const { url, canPlay, onEnded } = props;

  const refMedia = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (canPlay) {
      refMedia.current?.play();
      return;
    }
    refMedia.current?.pause();
  }, [canPlay]);

  return (
    <video
      src={url}
      className="w-full h-full min-h-dvh object-cover"
      muted
      ref={refMedia}
      onEnded={onEnded}
    />
  );
};
