import { Box, SlideFade, Stack, Text } from "@chakra-ui/react";

export default function FixedLeft(
  {
    isShow,
    poppins
  }: {
    isShow: boolean,
    poppins: {
      variable: string
    }
  }
) {
  return (
    <Box
      hideBelow='1028px'
      w='calc(100% - 500px)'
    >
      <Box
        w='calc(100% - 500px)'
        h='100%'
        bg="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"
        bgPos='center'
        bgSize='cover'
        pos='fixed'
        borderRight='8px'
        borderRightStyle='solid'
        borderRightColor='blackAlpha.400'
      >
        <Box
          h='100%'
          p='42px'
        >
          <SlideFade
            in={isShow}
            transition={{ enter: { duration: 1 } }}
          >
            <Text
              fontSize='md'
              fontWeight='bold'
              color='alt'
              letterSpacing='2px'
              className={poppins.variable}
            >
              WEDDING ANNOUNCEMENT
            </Text>
          </SlideFade>

          <Stack
            pt='32px'
            color='alt'
            textTransform='uppercase'
            letterSpacing='4px'
            fontFamily='butler'
          >
            <Text
              as='h2'
              lineHeight='1'
              fontWeight='light'
              fontSize='7xl'
            >
              Tiffany
              &
            </Text>

            <Text
              as='h2'
              mt='-16px'
              fontWeight='light'
              fontSize='7xl'
            >
              Jared
            </Text>
          </Stack>

          <SlideFade
            in={isShow}
            transition={{ enter: { duration: 1 } }}
          >
            <Text
              fontWeight='light'
              fontStyle='italic'
              fontFamily='newsreaderDisplay'
              color='alt'
              letterSpacing='1px'
              maxW='800px'
            >
              &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada.&quot;<br/>
              — Sapardi Djoko Damono
            </Text>
          </SlideFade>
        </Box>
      </Box>
    </Box>
  )
}
