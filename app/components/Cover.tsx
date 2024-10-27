import { Box, Button, Center, Text } from "@chakra-ui/react";

export default function Cover(
  {
    isOpen,
    poppins,
    onOpen
  }: {
    isOpen: boolean,
    poppins: {
      variable: string
    },
    onOpen: () => void
  }
) {
  return (
    <Box
      h={isOpen ? '0px' : '100vh'}
      transition={isOpen ? 'height 250ms 625ms' : ''}
    >
      <Box
        minH='100vh'
        color='alt'
        pos='relative'
      >
        <Box
          h='100vh'
          w='100%'
          bg="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')"
          bgPos='center'
          bgSize='cover'
          p='2rem'
          mb='-170px'
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
        </Box>

        <Box
          transform='translateY(-12vh)'
        >
          <Center>
            <Button
              fontFamily='newsreaderDisplay'
              fontSize='lg'
              fontWeight='normal'
              fontStyle='italic'
              border='1px solid primary'
              borderRadius='0px'
              p='0 2.4rem'
              h='8'
              bgColor='#f9f7f4'
              color='primary'
              animation='MoveUpDown 3s linear infinite'
              _hover={{ opacity: 0.8 }}
              onClick={() => onOpen()}
            >
              Open
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
