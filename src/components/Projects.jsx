import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Button,
  Link,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../Allproject/project";
import { motion, useAnimation } from "framer-motion";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);
const MotionHeading = motion(Heading);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsRef = useRef(null);
  const titleAnimation = useAnimation();

  useEffect(() => {
    setProjects(projectsData.portfolio);
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % projects[0].images.length
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [projects]);

  useEffect(() => {
    titleAnimation.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    });
  }, [titleAnimation]);

  // Define animation variants for the project cards
  const cardVariants = {
    hiddenLeft: { x: "-100%", opacity: 0 },
    hiddenRight: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Box
      ref={projectsRef}
      id="projects"
      minHeight="100vh"
      p={{ base: "5%", md: "10%" }}
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      overflow={"hidden"}
    >
      <MotionBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="4rem"
        initial={{ x: "100%", opacity: 0 }}
        animate={titleAnimation}
      >
        <MotionIcon
          as={FaProjectDiagram}
          boxSize={{ base: "40px", md: "50px", lg: "60px" }}
          color="red.500"
          mr="0.5rem"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        <MotionHeading as="h1" size="2xl" display="flex" ml="0.5rem">
          <Box>
            PROJEC
            <Box as="span" color="red.500" ml="0.5rem">
              TS
            </Box>
          </Box>
        </MotionHeading>
      </MotionBox>

      <SimpleGrid columns={1} spacing={10} w="100%">
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            display="flex"
            flexDirection={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            textAlign={{ base: "center", md: "left" }}
            p="4"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="xl"
            _dark={{ bg: "gray.700" }}
            h="100%"
            variants={cardVariants}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            animate="visible"
          >
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={{ base: "1rem", md: "2rem" }}
              height={{ base: "200px", md: "auto" }}
              overflow="hidden"
              borderRadius="12px"
            >
              <Link href={project.liveLink} isExternal>
                <Box
                  m={10}
                  borderRadius={12}
                  overflow="hidden"
                  transition="transform 0.3s ease" // Smooth transition
                  _hover={{
                    transform: "scale(1.05)", // Slightly larger on hover
                  }}
                >
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} ${currentImageIndex + 1}`}
                    width="100%"
                    height="auto"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Link>
            </Box>
            <Box
              flex="1"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "5xl" }}
                mb="0.5rem"
                bgGradient="linear(to-r, teal.400, pink.500)" 
                bgClip="text" 
                color="transparent" 
                textDecoration="underline" 
                textDecorationColor="gray.600" 
                textDecorationThickness="3px"
              >
                {project.title}
              </Text>

              <Wrap spacing={2} mb="1rem" justify="center">
                {project.techStack.map((tech, idx) => (
                  <WrapItem key={idx}>
                    <Tag
                      colorScheme="purple"
                      variant="outline"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "white",
                        bg: "purple.500",
                        transform: "scale(1.1)"
                      }}
                    >
                      {tech}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>

              <Text fontSize={{ base: "sm", md: "md" }} mb="1rem">
                {project.about}
              </Text>
              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap="0.5rem"
              >
                <Link href={project.githubLink} isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    colorScheme="teal"
                    variant="outline"
                    w="full"
                    maxW={{ base: "none", md: "150px" }}
                  >
                    GitHub
                  </Button>
                </Link>
                <Link href={project.liveLink} isExternal>
                  <Button
                    leftIcon={<FaExternalLinkAlt />}
                    colorScheme="red"
                    variant="outline"
                    w="full"
                    maxW={{ base: "none", md: "150px" }}
                  >
                    Live Demo
                  </Button>
                </Link>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
