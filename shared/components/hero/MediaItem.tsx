import { useCallback, useEffect, useRef, useState } from "react";

interface MediaItemProps {
  url: string;
  canPlay: boolean;
  onEnded?: () => void;
}

export const MediaItem = (props: MediaItemProps) => {
  const { url, canPlay, onEnded } = props;

  const refMedia = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (canPlay) {
      refMedia.current?.play();
      return;
    }
    refMedia.current?.pause();
  }, [canPlay]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className="flex h-full min-h-dvh w-full items-center justify-center bg-black text-white">
        <p className="text-lg">Error al cargar el video</p>
      </div>
    );
  }

  return (
    <video
      ref={refMedia}
      src={url}
      className="h-full min-h-dvh w-full object-cover"
      muted
      playsInline
      onEnded={onEnded}
      onError={handleError}
    />
  );
};
