import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import emailjs from "emailjs-com";
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
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9ocmnl6",
        "template_cvy6pes",
        e.target,
        "fj_Y3pqHib14qhTED"
      )
      .then(
        (result) => {
          toast({
            title: "Message sent.",
            description:
              "Thank you for reaching out! Your message has been successfully sent, and I'll get back to you as soon as possible.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          toast({
            title: "An error occurred.",
            description:
              "Oops! There was an issue sending your message. Please try again later or contact me directly at bgpkrishna123@gmail.com.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:bgpkrishna123@gmail.com";
  };

  return (
    <Box ml={-20}>
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
        overflow={"hidden"}
        mb="3%"
      >
        <MotionBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: isVisible ? "0%" : "-100%",
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          mb="2%"
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

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          width="100%"
          mt={5}
        >
          <Box>
            <MotionBox
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: isVisible ? "20%" : "-100%",
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ duration: 1, delay: 0.8 }}
              mb="1rem"
            >
              <MotionBox
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
                mb="1rem"
                mt={"1rem"}
              >
                <MotionIcon
                  as={FaEnvelope}
                  boxSize={{ base: "30px", md: "40px" }}
                  color="red.500"
                  mr="1rem"
                />
                <Text
                  as="span"
                  fontSize={{ base: "lg", md: "lg" }}
                  _hover={{ color: "red.500" }}
                  onClick={handleEmailClick}
                  cursor="pointer"
                >
                  bgpkrishna123@gmail.com
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -100,
                }}
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
                  fontSize={{ base: "lg", md: "lg" }}
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
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -100,
                }}
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
            as="form"
            onSubmit={handleSubmit}
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: isVisible ? "0%" : "100%",
              opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            boxShadow="lg"
            p="2rem"
            borderRadius="md"
            bg="white"
            ml={10}
            _dark={{ bg: "gray.700" }}
          >
            <MotionInput
              name="from_name"
              placeholder="Your Name"
              mb="1rem"
              value={formData.from_name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              _focus={{ borderColor: "teal.500" }}
            />
            <MotionInput
              name="from_email"
              placeholder="Your Email"
              mb="1rem"
              value={formData.from_email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              _focus={{ borderColor: "tea,.500" }}
            />
            <MotionTextarea
              name="message"
              placeholder="Your Message"
              mb="1rem"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              _focus={{ borderColor: "teal.500" }}
            />
            <MotionButton
              type="submit"
              colorScheme="red"
              isLoading={isSubmitting}
              loadingText="Sending..."
              _hover={{ bg: "red.600" }}
            >
              Send
            </MotionButton>
          </MotionBox>
        </SimpleGrid>
      </MotionBox>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight={500}
        color="gray.500"
        textAlign="center"
        mb={2.5}
      >
        Created By Krishna Pratap | © 2024
      </Box>
    </Box>
  );
};

export default Contact;
