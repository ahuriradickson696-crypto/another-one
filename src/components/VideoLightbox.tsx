import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/** Opens the campus video on demand. YouTube is only contacted once a visitor presses play. */
export function VideoLightbox({
  videoId,
  title = 'Avance International University campus video',
  onClose,
}: {
  videoId: string;
  title?: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previous = document.activeElement as HTMLElement | null;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [onClose]);

  const params = new URLSearchParams({ autoplay: '1', rel: '0', modestbranding: '1', playsinline: '1' });

  return (
    <div className="video-lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="video-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="video-lightbox-close" onClick={onClose} aria-label="Close video">
          <X size={20} />
        </button>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
