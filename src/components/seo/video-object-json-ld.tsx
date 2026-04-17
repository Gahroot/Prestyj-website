import { SafeJsonLd } from "./safe-json-ld";

export interface VideoDescriptor {
  vimeoId: string;
  name: string;
  description: string;
  duration?: string;
  thumbnailUrl?: string;
  uploadDate?: string;
}

interface VideoObjectJsonLdProps {
  videos: VideoDescriptor[];
}

export function VideoObjectJsonLd({ videos }: VideoObjectJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      name: video.name,
      description: video.description,
      thumbnailUrl:
        video.thumbnailUrl ?? `https://vumbnail.com/${video.vimeoId}.jpg`,
      uploadDate: video.uploadDate ?? "2026-01-01",
      contentUrl: `https://player.vimeo.com/video/${video.vimeoId}`,
      embedUrl: `https://player.vimeo.com/video/${video.vimeoId}`,
      ...(video.duration ? { duration: video.duration } : {}),
      publisher: {
        "@type": "Organization",
        name: "PRESTYJ",
        logo: {
          "@type": "ImageObject",
          url: "https://prestyj.com/icon-512.png",
        },
      },
    })),
  };

  return <SafeJsonLd data={jsonLd} />;
}
