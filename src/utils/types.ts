import { StaticImageData } from "next/image";

export interface SingleProjectProps {
  image?: StaticImageData;
  title: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
  hasDemoVideo?: boolean;
  demoVideoUrl?: string;
  demoPlaceholder?: StaticImageData;
}
