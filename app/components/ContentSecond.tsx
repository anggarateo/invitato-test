import { Box, Button, Heading, Image, SlideFade, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ContentSecond(
  {
    isShow,
    poppins,
    ref
  }: {
    isShow: boolean,
    poppins: {
      variable: string
    },
    ref: React.RefObject<HTMLDivElement>
  }
) {
  const [isFocus, setFocus] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [index, setIndex] = useState(2)

  const images = [
    { src: 'https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg', description: '' },
    { src: 'https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg', description: '' },
    { src: 'https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg', description: '' },
    { src: 'https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg', description: '' },
    { src: 'https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg', description: '' },

  ]

  function handleScroll() {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= window.innerHeight / 2) {
        setFocus(true)
      } else {
        setFocus(false)
      }
    }
  }

  function handlePreview(id: number) {
    setIndex(id)
    setOpen(true)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, []) // eslint-disable-line

  return (
    <Box
      ref={ref}
      p='50px 0px 100px'
      textAlign='center'
      bgColor='alt'
      color='primary'
      pos='relative'
      onScroll={() => setFocus(true)}
    >
      <SlideFade
        in={isShow || isFocus}
        transition={{ enter: { duration: 1 } }}
        offsetY='50px'
      >
        <Box
          className={poppins.variable}
          fontWeight='bold'
          letterSpacing='2px'
          textTransform='uppercase'
          fontSize='md'
          textAlign='center'
        >
          <Text>
            DEAR MR-MRS-MS,
          </Text>
          
          <Text>
            Family & Friends
          </Text>
        </Box>
      </SlideFade>

      <SlideFade
        in={isShow || isFocus}
        transition={{ enter: { duration: 1 } }}
        offsetY='200px'
      >
        <Heading
          lineHeight={{
            base: 1.33,
            md: 1.2
          }}
          fontFamily='butler'
          p='24px 0px'
          fontWeight='medium'
          fontSize='32px'
        >
          Welcome to<br/>
          Tiffany & Jared’s<br/>
          Wedding Website
        </Heading>
      </SlideFade>

      <SlideFade
        in={isShow || isFocus}
        transition={{ enter: { duration: 1 } }}
        offsetY='100px'
      >
        <Text
          p='0px 10% 24px'
          fontSize='18px'
          fontStyle='italic'
          mb='18px'
        >
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
      </SlideFade>

      <Box
        pos='relative'
      >
        <Carousel
          centerMode
          centerSlidePercentage={60}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={index}
          infiniteLoop
          onChange={(i) => setIndex(i)}
        >
          {images.map((img, i) => (
            <Box
              key={img.src + i}
              transition='transform 1.5s linear'
              boxSizing="border-box"
              m='0px'
              h='390px'
              w='280px'
              cursor='pointer'
              onClick={() => handlePreview(i)}
            >
              <Image
                src={img.src}
                alt={img.src}
                objectFit='cover'
                objectPosition='center center'
                h='390px'
                w='280px'
                border='10px solid transparent'
              />
            </Box>
          ))}
        </Carousel>

        <ReactImageCarouselViewer
          open={isOpen}
          onClose={() => setOpen(false)}
          images={images}
          startIndex={index}
          disableScroll
        />

        <Button
          pos='absolute'
          right='120px'
          bottom='-50px'
          alignSelf='center'
          bg='#F9F7F4'
          border='1px solid rgb(26, 27, 29)'
          cursor='pointer'
          h='30px'
          lineHeight={1}
          textAlign='center'
          w='70px'
          p='5px 10px'
          _hover={{ bg: 'transparent' }}
          onClick={() => index > 0 && setIndex(index - 1)}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='100%'
            fontSize='24px'
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" color="var(--chakra-colors-secondaryColorText)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1A1B1D' }}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          </Box>
        </Button>

        <Button
          pos='absolute'
          right='2.5rem'
          bottom='-50px'
          alignSelf='center'
          bg='#F9F7F4'
          border='1px solid rgb(26, 27, 29)'
          cursor='pointer'
          h='30px'
          lineHeight={1}
          textAlign='center'
          w='70px'
          p='5px 10px'
          _hover={{ bg: 'transparent' }}
          onClick={() => index < images.length - 1 && setIndex(index + 1)}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='100%'
            fontSize='24px'
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" color="var(--chakra-colors-secondaryColorText)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: '#1A1B1D' }}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Box>
        </Button>
      </Box>
    </Box>
  )
}
