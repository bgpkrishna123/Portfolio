import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Box, IconButton } from '@chakra-ui/react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex="1000"
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        size="lg"
        colorScheme="red"
        borderRadius="full"
        boxShadow="lg"
        onClick={scrollToTop}
        _hover={{ bg: "purple.400" }}
      />
    </Box>
  );
};

export default ScrollToTopButton;
