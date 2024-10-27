'use client'

import { Box, Button, Flex, SlideFade } from "@chakra-ui/react";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import FixedLeft from "./components/FixedLeft";
import Cover from "./components/Cover";
import ContentBegin from "./components/ContentBegin";
import ContentSecond from "./components/ContentSecond";

// eslint-disable-next-line
const butler = localFont({
  src: './fonts/Butler_Regular.otf',
  variable: '--font-butler',
  weight: '100 900'
})

// eslint-disable-next-line
const newsreaderDisplay = localFont({
  src: './fonts/NewsreaderDisplay-Regular.ttf',
  variable: '--font-newsreader-display',
  weight: '100 900'
})

// eslint-disable-next-line
const newsreaderText = localFont({
  src: './fonts/NewsreaderText-Regular.ttf',
  variable: '--font-newsreader-text',
  weight: '100 900'
})

const poppins = localFont({
  src: './fonts/Poppins-Regular.otf',
  variable: '--font-poppins',
  weight: '100 900'
})

export default function Home() {
  const [isShow, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isBegin, setBegin] = useState(false);
  const scrollTarget = useRef<any>(null) // eslint-disable-line
  const myAudio = useRef<any>(null) // eslint-disable-line
  const [isPlaying, setPlaying] = useState(false)

  useEffect(() => {
    setShow(true);
  }, []);

  function handleOpen() {
    setOpen(true)
    setPlaying(true)
    if (myAudio.current) {
      myAudio.current.play()
    }
  }

  async function handleBegin() {
    if (scrollTarget.current) {
      await scrollTarget.current.scrollIntoView({ behavior: 'smooth' })
      setBegin(true)
    }
  }

  function handleAudio() {
    if (myAudio.current) {
      if (isPlaying) {
        myAudio.current.pause()
      } else {
        myAudio.current.play()
      }
    
      setPlaying(!isPlaying)
    }
  }

  return (
    <Flex
      pos='relative'
      w='100%'
      h='100%'
      bgColor='transparent'
      justify='space-between'
    >
      <FixedLeft
        isShow={isShow}
        poppins={poppins}
      />

      <Box
        w={{
          base: '100%',
          alt: '500px'
        }}
        maxW='500px'
        margin={{
          base: 'auto',
          alt: 'unset'
        }}
        pos='relative'
        overflowX='hidden'
      >
        <Box
          shadow='2xl'
        >
          <Cover
            isOpen={isOpen}
            poppins={poppins}
            onOpen={handleOpen}
          />

          <Box>
            <Box>
              <audio ref={myAudio} loop className="hidden">
                <source src="https://invitato.net/test-product-engineer/static/bg-sound-a2a8927862ee1aa412b3df1a7e46ff7c.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {isOpen &&
              <SlideFade
                in={isOpen}
                transition={{ enter: { duration: 1 } }}
              >
                <Button
                  fontWeight='semibold'
                  h='8'
                  minW='8'
                  fontSize='sm'
                  color='gray.800'
                  pos='fixed'
                  zIndex='3'
                  bottom='12px'
                  left='42px'
                  bgColor='rgb(153, 122, 94)'
                  outline='transparent solid 2px'
                  p='0px'
                  borderRadius='50%'
                  onClick={handleAudio}
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#FFFFFF" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 255, 255)' }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path></svg>
                </Button>
              </SlideFade>
              }
            </Box>

            {isOpen &&
            <>
              <ContentBegin
                poppins={poppins}
                onBegin={handleBegin}
              />

              <ContentSecond
                ref={scrollTarget}
                isShow={isBegin}
                poppins={poppins}
              />
            </>
            }
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
