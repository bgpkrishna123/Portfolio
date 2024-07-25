import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Link, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import homeLogo from "../assets/home-main.svg";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Home = () => {
  const [developerType, setDeveloperType] = useState('Frontend Developer');
  const developerTypes = ['Frontend Developer', 'Backend Developer', 'Full Stack Web Developer'];
  const [typingIndex, setTypingIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (letterIndex < developerTypes[typingIndex].length) {
          setLetterIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (letterIndex > 0) {
          setLetterIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setTypingIndex((prev) => (prev + 1) % developerTypes.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [letterIndex, typingIndex, isTyping]);

  const currentText = developerTypes[typingIndex].slice(0, letterIndex);

  const handleResumeClick = (e) => {
    e.preventDefault();
    const viewUrl = 'https://drive.google.com/file/d/1zy7TvzBj2hw6u1b0lGG53J1RdAS4_kSG/view?usp=sharing';
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1zy7TvzBj2hw6u1b0lGG53J1RdAS4_kSG';

    window.open(viewUrl, '_blank', 'noopener,noreferrer');

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialIcons = [
    { icon: FaGithub, link: 'https://github.com/bgpkrishna123', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/krishna-pratap-coder/', label: 'LinkedIn' },
    { icon: FaEnvelope, link: 'mailto:bgpkrishna123@gmail.com', label: 'Email' },
  ];

  return (
    <Flex
      id="home"
      p="10%"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      overflow="hidden"
    >
      <Box flex="1" p="4">
        <MotionBox
          p="10%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          textAlign="left"
          overflow="hidden"
        >
          <MotionHeading
            as="h1"
            size="2xl"
            marginBottom="1rem"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}
          >
            Hello,
          </MotionHeading>
          <MotionHeading
            as="h1"
            size="2xl"
            marginBottom="1rem"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}
          >
            I am{' '}
            <MotionText
              as="span"
              fontSize="6xl"
              color="purple.400"
              style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}
            >
              Krishna Pratap
            </MotionText>
          </MotionHeading>
          <MotionText
            fontSize="4xl"
            color="yellow.300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            I am a{' '}
            <MotionText
              as="span"
              color="red.300"
              style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}
            >
              {currentText}
              <span style={{color:'black'}}> |</span>
            </MotionText>
          </MotionText>
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            mt={4}
            onClick={handleResumeClick}
            _hover={{ bg: 'blue.600', color: 'white' }}
          >
            Resume
          </Button>
          <Box mt={4} display="flex" justifyContent="flex-start">
            {socialIcons.map(({ icon: Icon, link, label }) => (
              <Link
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                ml={2}
                _hover={{ color: 'blue.600' }}
              >
                <Icon size={40} color="blue.500" style={{ borderRadius: '50%', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </Link>
            ))}
          </Box>
        </MotionBox>
      </Box>
      <Box
        flex="1"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={homeLogo}
          alt="Your Image Description"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Flex>
  );
};

export default Home;
