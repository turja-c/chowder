import Head from 'next/head';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import Intro from './home/Intro';

export default function Home() {
  return (
      <Box
          w='100%'
          h='100rem'
          bgGradient='linear(to-r, gray.300, purple.50, yellow.50, purple.50, gray.300)'
        >
      <Navbar />
      <Intro />
    </Box>
  );
}
