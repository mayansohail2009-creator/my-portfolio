"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["AI Engineer", "FDE (Forward Deployed Engineer)"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-[56px]">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-foreground text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-accent">Mohammad Ayan</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden">
                <Image
                  src="/assets/hero-mark.png"
                  alt="Abstract concentric-circle mark"
                  width={413}
                  height={413}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: "413px", height: "413px", maxWidth: "none" }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-116px", top: "-62px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-foreground text-lg">
                  Hello! I Am{" "}
                  <span className="text-accent">Mohammad Ayan</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> An AI Engineer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-foreground leading-tight">
                judges an AI agent
                <br /> by how much work it actually{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-accent via-accent-warm to-accent bg-clip-text text-transparent">
                    saves
                  </span>
                </span>
                {" "}you...
              </h1>
              <p className="text-md text-foreground/80">
                Because if it doesn&apos;t make your life easier in five seconds, why buy it?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-10 lg:pt-15 text-center lg:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold leading-tight break-words min-h-[2.6em] sm:min-h-[1.3em] flex items-center justify-center lg:justify-start">
            <span>
              I&apos;m an {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mt-8 lg:mt-15 mx-auto lg:mx-0">
            I build autonomous reporting agents for Shopify stores. Weekly
            narratives with custom metrics delivered via email or a channel of
            your choice, no dashboards to login to.
          </p>
        </div>
      </div>
    </section>
  );
}
