import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Link as ChakraLink,
  Spacer,
  useColorMode,
  IconButton,
  VStack,
  Collapse,
} from '@chakra-ui/react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode(); 
  const [isMobile, setIsMobile] = useState(false); 

  // Initialize color mode on mount
  useEffect(() => {
    const preferredColorMode = localStorage.getItem('color-mode');
    if (!preferredColorMode) {
      // Set to dark mode if no preference is stored
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', preferredColorMode);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      let active = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          active = section;
        }
      });

      setActiveLink(active);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    const viewUrl =
    'https://drive.google.com/file/d/1To6D-KPsTM8VnkHsnG2UTXVYfJOdd1hC/view?usp=sharing';
    const downloadUrl =
      'https://drive.google.com/uc?export=download&id=1To6D-KPsTM8VnkHsnG2UTXVYfJOdd1hC';

    window.open(viewUrl, '_blank', 'noopener,noreferrer');

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNameClick = () => {
    scroller.scrollTo('home', {
      duration: 500,
      smooth: true,
    });
    setActiveLink('home');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleColorModeToggle = () => {
    toggleColorMode();
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('color-mode', newColorMode);
    document.documentElement.setAttribute('data-theme', newColorMode);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="3rem"
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
      position="sticky"
      top="0"
      zIndex="10"
      fontSize="lg"
      height="64px"
      //overflow={'hidden'}
    >

      <Flex align="center">
      <Box>
      <ChakraLink
        fontSize="2xl"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
        cursor="pointer"
        onClick={handleNameClick}
      >
        <span style={{ color: colorMode === 'light' ? 'black' : 'white', fontSize: '2rem' }}>K</span>
        <span style={{ color: colorMode === 'light' ? 'black' : 'white', fontSize: '3xl' }}>ri</span>
        <span style={{ color: 'red', fontSize: '' }}>shnaPratap</span>
      </ChakraLink>
    </Box>
      </Flex>
      
      <Flex align="center" ml={4}>
        <Spacer />
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={handleColorModeToggle}
          variant="ghost"
          size="md"
          _hover={{ color: 'red' }}
        />
      </Flex>
      <Spacer/>
     
      <Flex
        align="center"
        justify={{ base: 'center', md: 'flex-start' }}
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: 0, md: '2rem' }} 
      >
        {isMobile ? (
         
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            onClick={toggleMenu}
            variant="ghost"
            size="md"
            _hover={{ color: 'red' }}
          />
        ) : (
        
          <>
            <ChakraLink
              as={ScrollLink}
              to="home"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'home' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => setActiveLink('home')}
              mr={4}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="about"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'about' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => setActiveLink('about')}
              mr={4}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="skills"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'skills' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => setActiveLink('skills')}
              mr={4}
            >
              Skills
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="projects"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'projects' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => setActiveLink('projects')}
              mr={4}
            >
              Projects
            </ChakraLink>
            
            <ChakraLink
              href="#"
              onClick={handleResumeClick}
              cursor="pointer"
              _hover={{ textDecoration: 'none', backgroundColor: "purple.400", color: 'white' }}
              fontSize="xl"
              px={4}
              py={2}
              borderRadius="md"
              mr={1.5}
            >
              Resume
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'contact' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => setActiveLink('contact')}
              mr={4}
            >
              Contact
            </ChakraLink>
          </>
        )}

       
        <Collapse in={showMenu} animateOpacity>
          <VStack
            spacing={4}
            align="center"
            justify="center"
            pt={4}
            pb={4}
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            borderRadius="md"
            boxShadow="md"
            position="absolute"
            top="64px" 
            left={0}
            right={0}
            zIndex="999"
          >
            <ChakraLink
              as={ScrollLink}
              to="home"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'home' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => {
                setActiveLink('home');
                toggleMenu(); 
              }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="about"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'about' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => {
                setActiveLink('about');
                toggleMenu(); 
              }}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="skills"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'skills' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => {
                setActiveLink('skills');
                toggleMenu();
              }}
            >
              Skills
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="projects"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'projects' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => {
                setActiveLink('projects');
                toggleMenu(); 
              }}
            >
              Projects
            </ChakraLink>
            <ChakraLink
              as={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}
              cursor="pointer"
              _hover={{ textDecoration: 'none', color: 'red' }}
              color={activeLink === 'contact' ? 'red' : 'inherit'}
              fontSize="xl"
              onClick={() => {
                setActiveLink('contact');
                toggleMenu(); 
              }}
            >
              Contact
            </ChakraLink>
            <ChakraLink
              href="#"
              onClick={(e) => {
                handleResumeClick(e);
                toggleMenu(); 
              }}
              cursor="pointer"
              _hover={{ textDecoration: 'none', backgroundColor: 'red', color: 'white' }}
              fontSize="xl"
              px={4}
              py={2}
              borderRadius="md"
            >
              Resume
            </ChakraLink>
          </VStack>
        </Collapse>
      </Flex>
      
    </Flex>
  );
};

export default Navbar;
