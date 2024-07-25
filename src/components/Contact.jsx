import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Input,
  Textarea,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai"; 
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionIcon = motion(Icon);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);
const MotionButton = motion(Button);

const Contact = () => {
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.5 });

  const handleEmailClick = () => {
    window.location.href = "mailto:bgpkrishna123@gmail.com";
  };

  return (
    <>
      <MotionBox
        ref={contactRef}
        id="contact"
        p="10%"
        pb="2%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontWeight={500}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        overflow={'hidden'}
      >
        <MotionBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: isVisible ? '0%' : '-100%', opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          mb="10%"
        >
          <MotionIcon
            as={FaEnvelope}
            boxSize={{ base: "40px", md: "50px", lg: "60px" }}
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
          >
            <Box>CONTACT</Box>
            <Box color="red.500" ml="0.5rem">
              ME
            </Box>
          </MotionHeading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%" >
          <Box>
            <MotionBox
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: isVisible ? '20%' : '-100%', opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              mb="1rem">
            <MotionBox
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }} 
              transition={{ duration: 1 }}
              mb="1rem"
            >
              <MotionIcon
                as={FaEnvelope}
                boxSize={{ base: "30px", md: "40px" }} 
                color="red.500"
                mr="1rem"
              />
              <Text
                as="span"
                fontSize={{ base: "lg", md: "xl" }} 
                _hover={{ color: "red.500" }} 
                onClick={handleEmailClick}
                cursor="pointer"
              >
                bgpkrishna123@gmail.com
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }} 
              transition={{ duration: 1, delay: 0.2 }}
              mb="1rem"
            >
              <MotionIcon
                as={FaPhoneAlt}
                boxSize={{ base: "30px", md: "40px" }} 
                color="red.500"
                mr="1rem"
              />
              <Text
                as="span"
                fontSize={{ base: "lg", md: "xl" }} 
                _hover={{ color: "red.500" }} 
              >
                9534459253
              </Text>
            </MotionBox>

            <MotionBox
              display="flex"
              mt="1rem"
              justifyContent={{ base: "center", md: "flex-start" }} 
              alignItems="center"
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }} 
              transition={{ duration: 1, delay: 0.4 }}
            >
              <MotionIcon
                as={AiFillMail}
                boxSize={{ base: "50px", md: "60px" }}
                color="skyblue" 
                cursor="pointer"
                onClick={handleEmailClick} 
                _hover={{ color: "orange.400" }} 
                mr={{ base: "1rem", md: "2rem" }} 
              />
              <MotionIcon
                as={FaGithub}
                boxSize={{ base: "40px", md: "50px" }}
                color="gray.500"
                cursor="pointer"
                onClick={() =>
                  window.open("https://github.com/bgpkrishna123", "_blank")
                }
                _hover={{ color: "gray.700" }}
                mr={{ base: "1rem", md: "2rem" }} 
              />

              <MotionIcon
                as={FaLinkedin}
                boxSize={{ base: "40px", md: "50px" }}
                color="blue.300"
                cursor="pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/krishna-pratap-coder/",
                    "_blank"
                  )
                }
                _hover={{ color: "blue.500" }}
              />
            </MotionBox>
            </MotionBox>
          </Box>


          <MotionBox
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isVisible ? '0%' : '100%', opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            boxShadow="lg"
            p="2rem"
            borderRadius="md"
            bg="white"
            _dark={{ bg: "gray.700" }} 
          >
            <MotionInput
              placeholder="Name"
              mb="1rem"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              color="red.500"
              _focus={{ borderColor: "red.500" }}
            />
            <MotionInput
              placeholder="Email"
              mb="1rem"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              color="red.500"
              _focus={{ borderColor: "red.500" }}
            />
            <MotionTextarea
              placeholder="Message"
              mb="1rem"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              color="red.500"
              _focus={{ borderColor: "red.500" }}
            />
            <MotionButton
              bg="red.500"
              width="30%"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              _hover={{ bg: "red.400" }}
            >
              Send
            </MotionButton>
          </MotionBox>
        </SimpleGrid>

        <MotionBox
          mt="3rem"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          textAlign="center"
          fontSize="md"
        >
          Created By Krishna Pratap | © 2024
        </MotionBox>
      </MotionBox>
    </>
  );
};

export default Contact;
