"use client";
import Image, { StaticImageData } from "next/image";
import {
  domAnimation,
  LazyMotion,
  m,
  useInView,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import github from "../assets/images/github-logo.svg";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { FiPlay } from "react-icons/fi";

interface Props {
  image?: StaticImageData;
  title: string;
  description: string;
  codeUrl: string;
  liveUrl: string;
  hasDemoVideo?: boolean;
  demoVideoUrl?: string;
  demoPlaceholder?: StaticImageData;
}

const SingleProject = ({
  image,
  title,
  description,
  codeUrl,
  liveUrl,
  hasDemoVideo,
  demoVideoUrl,
  demoPlaceholder,
}: Props) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const showVideoDemo = Boolean(hasDemoVideo && demoVideoUrl);
  const thumbnail = demoPlaceholder ?? image;

  useEffect(() => {
    if (!isPlaying) return;
    void videoRef.current?.play();
  }, [isPlaying]);

  const variant: Variants = {
    initial: {
      y: 24,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const renderMedia = () => {
    if (showVideoDemo && isPlaying) {
      return (
        <video
          ref={videoRef}
          data-testid="video-demo"
          src={demoVideoUrl}
          controls
          autoPlay
          controlsList="nodownload"
          preload="metadata"
          playsInline
          className="w-full h-full object-cover"
        />
      );
    }

    if (showVideoDemo) {
      return (
        <button
          type="button"
          data-testid="video-placeholder"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play demo video for ${title}`}
          className="relative w-full h-full block"
        >
          {thumbnail && (
            <Image
              src={thumbnail}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
              alt={`${title} demo thumbnail`}
            />
          )}
          <span className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/25" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 transition-transform duration-300 group-hover:scale-110">
              <FiPlay className="text-white text-2xl translate-x-[2px]" />
            </span>
          </span>
        </button>
      );
    }

    if (!thumbnail) return null;

    return (
      <div data-testid="photo-demo" className="relative w-full h-full">
        <Image
          src={thumbnail}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
          alt="Project preview"
        />
      </div>
    );
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        data-testid="single-project"
        variants={variant}
        animate={inView ? "animate" : "initial"}
        initial="initial"
        ref={ref}
        className="group w-full flex lg:flex-row flex-col gap-10 justify-center lg:justify-between items-center my-14"
      >
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl border border-white/10">
            <div className="rounded-2xl bg-[#0B0F1A] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                <span className="ml-3 truncate text-[0.7rem] font-mono text-slate-400/80 tracking-tight">
                  {liveUrl.replace("https://", "")}
                </span>
              </div>

              <div className="relative h-[280px] bg-black/20">
                {renderMedia()}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="gradient text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] font-bold tracking-tight truncate">
            {title}
          </h1>
          <p className="mt-2 text-[1rem] leading-relaxed text-slate-300/90 font-medium">
            {description}
          </p>

          <div className="flex items-center gap-x-4 mt-5">
            <Link
              href={codeUrl || ""}
              target="_blank"
              className="flex items-center gap-x-2 rounded-full text-[0.8rem] font-medium px-4 py-2.5 border border-white/15 text-slate-200 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 transition-colors duration-300"
            >
              <Image
                src={github}
                width={100}
                height={100}
                alt=""
                aria-hidden="true"
                className="w-4 h-4"
              />
              <span>View code</span>
            </Link>
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-x-2 rounded-full text-[0.8rem] font-medium px-4 py-2.5 text-white bg-gradient"
            >
              <span>Live site</span>
              <RxExternalLink className="text-[1rem]" />
            </Link>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default SingleProject;
