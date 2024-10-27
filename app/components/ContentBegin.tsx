import { Box, Button, Center, Text } from "@chakra-ui/react";

export default function ContentBegin(
  {
    poppins,
    onBegin
  }: {
    poppins: {
      variable: string
    },
    onBegin: () => void
  }
) {
  
  const images = [
    'https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642',
    'https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322',
    'https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828',
    'https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497',
    'https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372'
  ]

  return (
    <Box
      minH='100vh'
      bgColor='alt'
      color='alt'
      pos='relative'
    >
      <Box
        bgColor='#000'
        h='100vh'
        w='100%'
        pos='absolute'
        left='0'
        overflow='hidden'
        top='0'
        zIndex='1'
      >
        {images.map((img, i) => (
          <Box
            key={img + i}
            animation='slide 25s infinite'
            bg={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('${img}')`}
            bgPos='50%'
            bgSize='cover'
            h='100%'
            w={'100%'}
            pos='absolute'
            opacity='0'
            style={{ animationDelay: `${i * 5}s` }}
          ></Box>                  
        ))}
      </Box>

      <Box
        h='100vh'
        w='100%'
        p='2rem'
        zIndex='2'
        pos='relative'
      >
        <Text
          as='h2'
          lineHeight={{
            base: 1.33,
            md: 1.2
          }}
          mt='60px'
          mb='8px'
          fontWeight='bold'
          letterSpacing='2px'
          textTransform='uppercase'
          fontSize='md'
          textAlign='center'
          color='alt'
          className={poppins.variable}
        >
          WEDDING ANNOUNCEMENT
        </Text>

        <Center
          h='calc(90% - 130px)'
        >
          <Box
            textAlign='center'
          >
            <Text
              as='h2'
              lineHeight={{
                base: 1.33,
                md: 1.2
              }}
              textTransform='uppercase'
              fontFamily='butler'
              fontWeight='light'
              fontSize='4xl'
              color='alt'
            >
              Tiffany & Jared
            </Text>

            <Text
              as='h2'
              lineHeight={{
                base: 1.33,
                md: 1.2
              }}
              fontFamily='newsreaderDisplay'
              fontWeight='light'
              fontSize='4xl'
              fontStyle='italic'
              color='alt'
            >
              #TImetoshaRE
            </Text>
          </Box>
        </Center>

        <Button
          bg='transparent'
          ml='auto'
          p='0px'
          display='flex'
          justifyContent='flex-end'
          mt='4rem'
          color='alt'
          _hover={{ bg: 'transparent' }}
          onClick={() => onBegin()}
        >
          <Text
            className={poppins.variable}
            textTransform='uppercase'
            fontWeight='bold'
            mr='7px'
            fontSize='sm'
          >
            scroll to begin
          </Text>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </Button>
      </Box>
    </Box>
  )
}
