import React, { useRef, useEffect } from 'react';
import { Box, Heading, Icon, Tooltip, SimpleGrid } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaJava, FaLaptopCode, FaNode 
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import TypeScriptIcon from '../assets/typescript.svg';
import ChakraUiIcon from '../assets/chakra-ui-icon.svg';
import BootstrapIcon from '../assets/bootstrap-4.svg';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionIcon = motion(Icon);

const skills = [
  { icon: FaHtml5, label: 'HTML', color: '#E44D26' },
  { icon: FaCss3Alt, label: 'CSS', color: '#264DE4' },
  { icon: FaJs, label: 'JavaScript', color: '#F0DB4F' },
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, label: 'MongoDB', color: '#4DB33D' },
  { icon: FaJava, label: 'Java', color: '#007396' },
  { icon: SiExpress, label: 'Express.js', color: '#000000' },
  { icon: FaNode, label: 'Node.js', color: '#68A063' },
  { icon: TypeScriptIcon, label: 'TypeScript', color: '#3178C6' },
  { icon: ChakraUiIcon, label: 'Chakra UI', color: '#319795' },
  { icon: BootstrapIcon, label: 'Bootstrap', color: '#563d7c' },
];

const Skills = () => {
  const skillsRef = useRef(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.5 });
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
  }, [isVisible]);

  const iconControls = skills.map(() => useAnimation());

  useEffect(() => {
    if (isVisible) {
      iconControls.forEach((control, index) => {
        control.start({
          opacity: 1,
          scale: 1,
          rotate: [0, 360],
          transition: { duration: 0.8, delay: index * 0.3 }
        });
      });
    } else {
      iconControls.forEach((control) => {
        control.start({ opacity: 0, scale: 0.8, rotate: 0 });
      });
    }
  }, [isVisible, iconControls]);

  return (
    <Box
      ref={skillsRef}
      id="skills"
      minHeight="100vh"
      p={{ base: '5%', md: '10%' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow={'hidden'}
    >
      <MotionBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: isVisible ? '0%' : '-100%', opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        mb="2%"
      >
        <MotionIcon
          as={FaLaptopCode}
          boxSize={{ base: "30px", md: "40px", lg: "50px" }}
          color="red.500"
          mr="0.5rem"
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
            SKIL
            <Box as="span" color="red.500">
              {`LLS`.slice(-2)}
            </Box>
          </Box>
        </MotionHeading>
      </MotionBox>

      <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing={10} mt={8}>
        {skills.map((skill, index) => (
          <Tooltip label={skill.label} key={index} hasArrow fontSize="lg">
            <MotionBox
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize={{ base: '60px', sm: '80px', md: '100px', lg: '120px' }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              animate={iconControls[index]}
            >
              {typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.label} style={{ width: '100%', height: 'auto' }} />
              ) : (
                <MotionIcon as={skill.icon} boxSize={{ base: '60px', sm: '80px', md: '100px', lg: '120px' }} color={skill.color} />
              )}
            </MotionBox>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
