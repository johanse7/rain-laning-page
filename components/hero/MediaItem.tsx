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
      <div className="w-full h-full min-h-dvh flex items-center justify-center bg-black text-white">
        <p className="text-lg">Error al cargar el video</p>
      </div>
    );
  }

  return (
    <video
      src={url}
      className="w-full h-full min-h-dvh object-cover"
      muted
      playsInline
      ref={refMedia}
      onEnded={onEnded}
      onError={handleError}
    />
  );
};
