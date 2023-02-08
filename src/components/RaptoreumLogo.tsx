import React, { useState } from 'react';
import { motion } from 'framer-motion';

// yoyo: Infinity,
const transition = { duration: 5.0, ease: 'easeOut' };
const divTransition = { duration: 2.0, ease: 'easeOut' };

const RaptoreumLogo = (): any => {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <motion.div
        // className="box"
        initial={{ offsetDistance: '0%', opacity: 0, y: -250 }}
        animate={{ offsetDistance: '100%', opacity: 1, y: 0 }}
        transition={divTransition}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          style={{
            height: '25vh',
            width: '25vw',
            stroke: '#000000',
          }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 125 125"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1={77.17}
              y1={262.58}
              x2={172.69}
              y2={167.06}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#b64326" />
              <stop offset={1} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1={84.29}
              y1={229.17}
              x2={176.13}
              y2={229.17}
              gradientTransform="matrix(.97 0 0 1.01 2.86 -2.74)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} />
              <stop offset={1} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-3"
              x1={75.47}
              y1={302.55}
              x2={141.72}
              y2={236.3}
              xlinkHref="#linear-gradient"
            />
            <style>{'.cls-4{fill-rule:evenodd}'}</style>
          </defs>
          <motion.path
            d="M76.87 262.29c-4.48-29.05 3.08-41.37 8.68-47 17.93-18.05 65.72-18.07 81.68-21.39a50.79 50.79 0 0 0 14.05-4.3 95.52 95.52 0 0 0 9.22-4.72 60.55 60.55 0 0 1-10.45 13.74 61.84 61.84 0 0 1-6.78 5.73 227.23 227.23 0 0 1-34.37 20.32c-32.06 14.76-41.86 14.5-54.17 27.56a68.46 68.46 0 0 0-7.86 10.06Z"
            transform="translate(-72.17 -184.87)"
            style={{
              fill: 'url(#linear-gradient)',
              fillRule: 'evenodd',
            }}
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={transition}
          />
          <motion.path
            d="M174.11 203.71a179 179 0 0 1-18.42 12.36 217.63 217.63 0 0 1-24.38 12.09c-14.55 6.39-21.82 9.59-26.76 11.34A48.84 48.84 0 0 0 91 246.55a46.72 46.72 0 0 0-6.3 5.67 65.41 65.41 0 0 1 10.18-13.83c9.34-9.65 19-13.41 38.61-20.46 17.06-6.13 31.03-10.93 40.62-14.22Z"
            transform="translate(-72.17 -184.87)"
            style={{
              fill: 'url(#linear-gradient-2)',
            }}
            // strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={transition}
          />
          <motion.path
            className="cls-4"
            d="M199.25 204.39c-19.5.64-38.58 20.26-58.78 23.42 37.08-.29 45.62-18.36 58.78-23.42Z"
            transform="translate(-72.17 -184.87)"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={transition}
          />
          <motion.path
            d="M81.28 272.2c1.93.91 18.34 8.26 35.68-.57S138 245.11 138.43 243c.14-.78.31-1.83.41-3.07.33-4.14-.37-6.43-.07-6.51.49-.13 3.41 5.44 3.79 12.45a33.14 33.14 0 0 1-.95 9.12c-6.92 26.84-25.77 31.2-25.77 31.2C103.59 289 90 283.41 81.28 272.2Zm-4.65.07c-7.14 10.62-4.74 21.24.42 31.86.26-6 .83-12 6.71-18-4.62-4.64-5.89-9.25-7.13-13.86Zm70.31-26.07"
            transform="translate(-72.17 -184.87)"
            style={{
              fill: 'url(#linear-gradient-3)',
              fillRule: 'evenodd',
            }}
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={transition}
          />
          <motion.path
            className="cls-4"
            d="M93.75 263.5a29.13 29.13 0 0 1 3.17-6.41 31.06 31.06 0 0 1 2.71-3.5 34 34 0 0 1 14.65-9.29c.32-.1 2.16-.63 4.57-1.23.89-.23 1.63-.4 2.15-.52 4.49 13.64-7.85 30.09-27.25 20.95Z"
            transform="translate(-72.17 -184.87)"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={transition}
          />
        </svg>
      </motion.div>
    </>
  );
};

export default RaptoreumLogo;
