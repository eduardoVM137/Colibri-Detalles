"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const flowers = [
  { left: "13%", top: "25%", delay: 0 },
  { right: "14%", top: "20%", delay: .7 },
  { left: "28%", bottom: "6%", delay: 1.4 }
];

const driftingSeeds = [
  { left: "8%", top: "39%", x: [0, 18, 29, 12, -4, 0], y: [0, -12, 5, 20, 9, 0], rotate: [15, 75, 145, 220, 310, 375], duration: 10.4, delay: .2 },
  { right: "5%", top: "36%", x: [0, -22, -31, -14, 5, 0], y: [0, 7, -9, -21, -6, 0], rotate: [35, 110, 185, 245, 320, 395], duration: 9.8, delay: 2.1 },
  { right: "28%", bottom: "5%", x: [0, 15, 3, -18, -9, 0], y: [0, -16, -27, -11, 8, 0], rotate: [0, 95, 160, 250, 330, 420], duration: 12.3, delay: .75 },
  { left: "7%", bottom: "10%", x: [0, 11, 28, 19, -7, 0], y: [0, -9, -3, 17, 12, 0], rotate: [45, 125, 210, 275, 355, 430], duration: 10.9, delay: 1.9 }
];

const fireflies = [
  { left: "4%", top: "22%", x: [0, 32, 18, 47, 9, 0], y: [0, -18, 20, 7, -11, 0], size: 7, duration: 8.6, delay: 0 },
  { left: "42%", top: "1%", x: [0, -24, 13, 36, 8, 0], y: [0, 17, 29, 5, -8, 0], size: 6, duration: 10.2, delay: 1.3 },
  { right: "1%", top: "58%", x: [0, -28, -43, -16, -38, 0], y: [0, -21, 6, 25, 14, 0], size: 6, duration: 11.1, delay: 2.2 },
  { right: "22%", bottom: "1%", x: [0, 18, -9, -34, -13, 0], y: [0, -25, -38, -12, 14, 0], size: 8, duration: 9.8, delay: 1.7 },
  { left: "1%", bottom: "24%", x: [0, 27, 44, 19, 35, 0], y: [0, 18, -9, -25, 5, 0], size: 7, duration: 9.1, delay: 2.8 },
  { left: "18%", top: "3%", x: [0, 16, 31, 9, -14, 0], y: [0, -8, 13, 25, 6, 0], size: 11, duration: 12.4, delay: .6 },
  { right: "4%", top: "28%", x: [0, -18, -36, -12, 8, 0], y: [0, 15, -7, -24, -5, 0], size: 10, duration: 10.8, delay: 1.9 },
  { right: "7%", bottom: "10%", x: [0, -22, -8, 18, 5, 0], y: [0, -19, -34, -10, 14, 0], size: 12, duration: 13.1, delay: .3 },
  { left: "10%", bottom: "6%", x: [0, 14, 33, 21, -9, 0], y: [0, -22, -9, 17, 8, 0], size: 10, duration: 11.6, delay: 2.4 }
];

export function AnimatedLogoScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const birdRef = useRef<HTMLDivElement>(null);
  const flowerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [selectedFlower, setSelectedFlower] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [route, setRoute] = useState({ targetX: 0, targetY: 0, hideX: 0, hideY: 0, enterX: -300 });

  const measureRoute = useCallback(() => {
    const stage = stageRef.current;
    const bird = birdRef.current;
    const flower = flowerRefs.current[selectedFlower];
    if (!stage || !bird || !flower) return;

    const stageBox = stage.getBoundingClientRect();
    const flowerBox = flower.getBoundingClientRect();
    const beakX = bird.offsetLeft + bird.offsetWidth * (176 / 180);
    const beakY = bird.offsetTop + bird.offsetHeight * (77 / 120);

    setRoute({
      targetX: flowerBox.left - stageBox.left + flowerBox.width / 2 - beakX,
      targetY: flowerBox.top - stageBox.top + flowerBox.height / 2 - beakY,
      hideX: stage.clientWidth * .5 - beakX,
      hideY: stage.clientHeight * .88 - beakY,
      enterX: -stage.clientWidth * .42
    });
  }, [selectedFlower]);

  useLayoutEffect(() => {
    measureRoute();
    window.addEventListener("resize", measureRoute);
    return () => window.removeEventListener("resize", measureRoute);
  }, [measureRoute]);

  function nextFlight() {
    setSelectedFlower((current) => {
      const alternatives = [0, 1, 2].filter((value) => value !== current);
      return alternatives[Math.floor(Math.random() * alternatives.length)];
    });
    setCycle((current) => current + 1);
  }

  return (
    <div className="hero-stage" ref={stageRef} aria-label="Identidad visual de Colibrí Detalles">
      <div className="motion-particles" aria-hidden="true">
        {flowers.map((flower, flowerSlot) => {
          return (
            <motion.span
              key={flowerSlot}
              ref={(node) => { flowerRefs.current[flowerSlot] = node; }}
              className="motion-flower"
              style={{
                left: flower.left,
                right: flower.right,
                top: flower.top,
                bottom: flower.bottom,
                width: 24,
                height: 24
              }}
              animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.78, 1, 0.78] }}
              transition={{ duration: 3.4, delay: flower.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <i /><i /><i /><i /><b />
              {selectedFlower === flowerSlot && (
                <motion.div
                  key={cycle}
                  className="pollen-burst flower-pollen-burst"
                  animate={{ opacity: [0, 0, 1, 0, 0] }}
                  transition={{ duration: 12, times: [0, .29, .34, .46, 1] }}
                >
                  <span /><span /><span />
                </motion.div>
              )}
            </motion.span>
          );
        })}
        {driftingSeeds.map((seed, index) => (
          <motion.i
            className="drifting-seed"
            key={`seed-${index}`}
            style={{ left: seed.left, right: seed.right, top: seed.top, bottom: seed.bottom }}
            animate={{
              x: seed.x,
              y: seed.y,
              rotate: seed.rotate,
              opacity: [0, .65, 1, .5, .85, 0]
            }}
            transition={{ duration: seed.duration, delay: seed.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {fireflies.map((firefly, index) => (
          <motion.b
            className="logo-firefly"
            key={`firefly-${index}`}
            style={{
              left: firefly.left,
              right: firefly.right,
              top: firefly.top,
              bottom: firefly.bottom,
              width: firefly.size,
              height: firefly.size
            }}
            animate={{
              x: firefly.x,
              y: firefly.y,
              opacity: [.18, 1, .5, 1, .35, .18],
              scale: [.65, 1.35, .85, 1.15, .75, .65]
            }}
            transition={{ duration: firefly.duration, delay: firefly.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-logo-wrap">
        <Image className="hero-logo" src="/logo-colibri-oficial.jpg" alt="Colibrí Detalles" width={620} height={620} priority />
      </div>
      <div className="bird-hideout" aria-hidden="true"><i /><i /><i /></div>
      <motion.div
        key={cycle}
        ref={birdRef}
        className="logo-flying-bird"
        aria-hidden="true"
        animate={{
          x: [route.enterX, route.targetX - 42, route.targetX, route.targetX, route.targetX, route.hideX, route.hideX],
          y: [route.targetY + 70, route.targetY - 18, route.targetY, route.targetY, route.targetY, route.hideY, route.hideY],
          rotate: [-9, -4, 0, 0, 4, 18, 22],
          scale: [0.5, 0.82, 1, 1, .92, .3, .15],
          opacity: [0, 1, 1, 1, 1, 0, 0]
        }}
        transition={{ duration: 12, ease: "easeInOut", times: [0, .16, .3, .4, .5, .72, 1] }}
        onAnimationComplete={nextFlight}
      >
        <svg viewBox="0 0 180 120">
          <motion.g
            className="logo-bird-wings"
            animate={{ rotate: [-13, 16, -13], scaleY: [.65, 1.12, .65] }}
            transition={{ duration: .24, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M78 61C54 44 44 19 48 3c20 12 35 31 43 54" />
            <path d="M86 61C77 38 81 15 94 2c8 22 7 42-1 60" />
          </motion.g>
          <path d="M31 72c23-19 43-23 65-13 18-8 34-2 41 11l39 7-38 2c-13 22-42 28-64 13-17-12-29-13-53-7 8-6 11-9 10-13Z" />
          <circle cx="132" cy="68" r="2.2" />
        </svg>
        <motion.div
          className="pollen-carry"
          animate={{ opacity: [0, 0, 1, .65, 0, 0] }}
          transition={{ duration: 12, times: [0, .34, .4, .48, .56, 1] }}
        >
          <i /><i />
        </motion.div>
      </motion.div>
      {/* <span className="hero-tag tag-one">Ideas únicas</span>
      <span className="hero-tag tag-two">Para celebrar</span> */}
      <span className="hero-spark spark-one">✦</span>
      <span className="hero-spark spark-two">✦</span>
    </div>
  );
}
