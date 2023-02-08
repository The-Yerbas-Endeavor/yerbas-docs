import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// yoyo: Infinity,
const transition = { duration: 5.5, ease: 'easeInOut' };
const raptoreumTextTransition = { duration: 3.5, ease: 'easeInOut' };
const divTransition = { duration: 6.5, ease: 'easeInOut' };
const singleLetterTransition = { duration: 3.5, ease: 'easeInOut' };

const RaptoreumTextLogo = (): any => {
  const [isHovered, setHovered] = useState(false);
  // const x = useMotionValue(10);
  // const filter = useTransform(x, (value) => value * 2); poop nuget
  // // const filter = useTransform(scrollYProgress, (v) => `invert(${v})`);

  return (
    <>
      <motion.div
        // className="box"
        initial={{ offsetDistance: '0%', opacity: 0, y: -250 }}
        animate={{ offsetDistance: '100%', opacity: 1, y: 0 }}
        transition={raptoreumTextTransition}
        // whileHover={{
        //   scale: 1.05,
        //   transition: { duration: 0.3 },
        //   stroke: 'black',
        // }}
        style={{
          height: '25vh',
          width: '25vw',
          stroke: '#000000',
          margin: 'auto',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width="100%"
          height="100%"
          transition={singleLetterTransition}
          animate={{
            y: [0, -5, 0],
            pathLength: !isHovered ? 0 : 1,
            scale: !isHovered ? [1, 1, 1] : [1, 1.03, 1],
            transition: { repeat: Infinity, duration: 6.5 },
            stroke: isHovered
              ? ['#ff008c', '#7700ff', 'rgb(230, 255, 0)', '#ff008c']
              : ['#ffffff', '#ff0000', '#ffffff'],
          }}
          viewBox="45 -5 365.84 120.83"
        >
          <motion.path
            style={{
              fill: 'none',
            }}
            d="M182.77,252.53a10.29,10.29,0,0,0,2.15-6.49,10,10,0,0,0-.55-3.31,7.27,7.27,0,0,0-1.72-2.73,9.64,9.64,0,0,0-4-2.28,20.34,20.34,0,0,0-6.21-.81H161.31l-7.94,29.59h8.24l2.41-9h3.63l3.93,9h9l-4.57-10A12.11,12.11,0,0,0,182.77,252.53ZM174.86,250a7.85,7.85,0,0,1-4.44,1.11h-4.69l1.94-7.15h4.44c1.75,0,3,.34,3.64,1a3,3,0,0,1,.76,2A3.45,3.45,0,0,1,174.86,250Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M201.78,236.7,181.2,266.5h8.91l3.55-5.28h11.42l.71,5.28h8.63l-4.61-29.8Zm-4,18.14,5.53-8.5,1.06,8.5Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M240.28,237.68a20.64,20.64,0,0,0-6.08-.77h-9.68l-8,29.59h8.24L227.1,258H232a20.52,20.52,0,0,0,6-.83,13.78,13.78,0,0,0,4.63-2.37,10.78,10.78,0,0,0,3-3.76,11.17,11.17,0,0,0,1.07-5,8.19,8.19,0,0,0-2.32-6.05A9.57,9.57,0,0,0,240.28,237.68Zm-3.7,12.7a7.74,7.74,0,0,1-4.71,1.24h-3.08l2.07-7.82h3a4.78,4.78,0,0,1,3.51,1.14,2.85,2.85,0,0,1,.84,2.08A4,4,0,0,1,236.58,250.38Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.polygon
            points="205.22 53.39 179.31 53.39 177.36 60.58 186.24 60.58 180.19 82.98 188.44 82.98 194.44 60.58 203.31 60.58 205.22 53.39"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M337.58,242.73a7.27,7.27,0,0,0-1.72-2.73,9.64,9.64,0,0,0-4-2.28,20.34,20.34,0,0,0-6.21-.81H314.52l-7.94,29.59h8.24l2.41-9h3.63l3.93,9h9l-4.57-10a12.11,12.11,0,0,0,6.71-4,10.29,10.29,0,0,0,2.15-6.49A10,10,0,0,0,337.58,242.73ZM328.07,250a7.85,7.85,0,0,1-4.44,1.11h-4.69l1.94-7.15h4.44c1.75,0,3,.34,3.64,1a3,3,0,0,1,.76,2A3.45,3.45,0,0,1,328.07,250Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.polygon
            points="295.11 60.37 297.01 53.39 273.3 53.39 265.36 82.98 289.28 82.98 291.14 76 275.33 76 276.6 71.31 290.72 71.31 292.45 64.85 278.33 64.85 279.56 60.37 295.11 60.37"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M392.18,236.91l-4.39,16.28a15,15,0,0,1-1.06,2.93,6.83,6.83,0,0,1-1.44,2,5.37,5.37,0,0,1-4,1.56,4.72,4.72,0,0,1-3.42-1.14,4.2,4.2,0,0,1-1.19-3.17,9,9,0,0,1,.11-1.39,9.65,9.65,0,0,1,.32-1.4l4.18-15.64H373L369,252a18.15,18.15,0,0,0-.51,2.43,17,17,0,0,0-.17,2.3,9.61,9.61,0,0,0,3.11,7.63q3.1,2.73,8.85,2.73a19.42,19.42,0,0,0,6.17-.91,11.84,11.84,0,0,0,4.74-2.89,19.39,19.39,0,0,0,4.6-8.84l4.7-17.5Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.polygon
            points="355.97 53.39 345.92 64.85 341.98 53.39 333.7 53.39 325.75 82.98 333.87 82.98 338.39 66.07 342.75 77.57 342.91 77.57 353.52 65.99 349 82.98 357.24 82.98 365.19 53.39 355.97 53.39"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M305.67,244.37a12.3,12.3,0,0,0-2.88-4.2,13.51,13.51,0,0,0-4.46-2.79,15.64,15.64,0,0,0-5.77-1,17,17,0,0,0-7.07,1.45,18,18,0,0,0-5.58,3.87,17.45,17.45,0,0,0-3.66,5.56,16.88,16.88,0,0,0-1.31,6.53,13.62,13.62,0,0,0,1,5.26,12.43,12.43,0,0,0,2.88,4.21,13.61,13.61,0,0,0,4.46,2.79,15.85,15.85,0,0,0,5.77,1,17.09,17.09,0,0,0,7.08-1.46,18.11,18.11,0,0,0,5.58-3.87,17.44,17.44,0,0,0,3.65-5.55,16.92,16.92,0,0,0,1.31-6.53A13.7,13.7,0,0,0,305.67,244.37Zm-8,9.22a10.8,10.8,0,0,1-1.7,3,8.44,8.44,0,0,1-2.67,2.22,7.79,7.79,0,0,1-6.26.36,5.53,5.53,0,0,1-2-1.37,5.91,5.91,0,0,1-1.24-2.1,7.82,7.82,0,0,1-.42-2.59,9.53,9.53,0,0,1,.61-3.32,10.67,10.67,0,0,1,1.72-3.05,9.21,9.21,0,0,1,2.67-2.22,7.23,7.23,0,0,1,3.49-.84,7.14,7.14,0,0,1,2.75.49,5.53,5.53,0,0,1,2,1.37,5.86,5.86,0,0,1,1.24,2.09,7.83,7.83,0,0,1,.42,2.6A9.53,9.53,0,0,1,297.66,253.59Z"
            transform="translate(-71.67 -183.52)"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        // className="box"
        initial={{ offsetDistance: '0%', opacity: 0, y: 0 }}
        animate={{ offsetDistance: '0%', opacity: 1, y: 0 }}
        transition={divTransition}
        style={{
          marginTop: '-8vh',
        }}
      >
        Documentation
      </motion.div>
    </>
  );
};

export default RaptoreumTextLogo;
