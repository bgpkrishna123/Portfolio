import React, { useRef, useEffect } from 'react';
import { Box, Heading, Text, Image, useBreakpointValue, Icon } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

import profileImage from '../assets/profile.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionIcon = motion(Icon);

const About = () => {
  const imageBoxSize = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' });

  const text = "Full Stack MERN Developer with expertise in Javascript, React, Node.js, Express.js, and MongoDB. Dedicated to delivering dynamic web applications that solve complex problems and exceed user expectations. A detail oriented problem-solver with a passion for continuous learning and a track record of success. Seeking an opportunity to contribute my skills and expertise to drive the success of an organization.";
  const words = text.split(" ");

  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.5 });

  const titleAnimation = useAnimation();

  useEffect(() => {
    if (isVisible) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: 'spring', stiffness: 100 }
      });
    } else {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [isVisible, titleAnimation]);

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <MotionBox
      ref={aboutRef}
      id="about"
      minHeight="100vh"
      p={{ base: '5%', md: '10%' }}
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      overflow={'hidden'}
    >
      <MotionBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial={{ x: '100%', opacity: 0 }} // Changed from -100% to 100%
        animate={{ x: isVisible ? '0%' : '100%', opacity: isVisible ? 1 : 0 }} // Changed from -100% to 100%
        transition={{ duration: 1, delay: 0.3 }}
        mb="2rem"
      >
        <MotionIcon
          as={FaUser}
          boxSize={{ base: '40px', md: '50px', lg: '60px' }}
          color="red.500"
          mr="0.5rem"
          initial={{ rotate: 0 }}
          animate={{ rotate: isVisible ? 360 : 0 }}
          transition={{ duration: 1 }}
        />
        <MotionHeading
          as="h1"
          size="2xl"
          display="flex"
          initial={{ rotate: 0 }}
          animate={{ rotate: isVisible ? 360 : 0 }}
          transition={{ duration: 1 }}
          ml="0.5rem"
        >
          <Box>
            ABOUT
            <Box as="span" color="red.500" ml="0.5rem">ME</Box>
          </Box>
        </MotionHeading>
      </MotionBox>

      <MotionBox
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionBox
          flex="1"
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: '0', md: '4' }}
          mb={{ base: '2rem', md: 0 }}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="xl"
          p="1rem"
          initial={{ x: '100%', opacity: 0 }} // Changed from -100% to 100%
          animate={{ x: isVisible ? '0%' : '100%', opacity: isVisible ? 1 : 0 }} // Changed from -100% to 100%
          transition={{ duration: 1, delay: 0.5 }}
          _dark={{ bg: 'gray.700' }}
        >
          <MotionBox
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: isVisible ? '0%' : '100%', opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: 'md', md: 'lg' }}
              mb="2rem"
            >
              {words.map((word, index) => (
                <MotionText
                  key={index}
                  display="inline-block"
                  mr="0.2rem"
                  custom={index}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={wordAnimation}
                >
                  {index === 0 ? (
                    <span style={{ color: 'red', fontSize: '1.5em' }}>{word.charAt(0)}</span>
                  ) : (
                    word.charAt(0)
                  )}
                  {word.slice(1)}
                </MotionText>
              ))}
            </Text>
          </MotionBox>
        </MotionBox>
        <MotionBox
          flex="1"
          textAlign="center"
          initial={{ scale: 0.5 }}
          animate={{ scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 1.5 }}
          ml="5%"
        >
          <Image
            src={profileImage}
            alt="Profile"
            borderRadius="full"
            boxSize={imageBoxSize}
            objectFit="cover"
            mb={{ base: '2rem', md: 0 }}
          />
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default About;
