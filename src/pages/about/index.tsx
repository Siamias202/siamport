import {
  Github,
  Gmail,
  Linkedin,
  Medium,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import Layout from '../../components/Layout/Layout'

const GitHubCalendar = dynamic(() => import('react-github-calendar'))


const About = () => {
  const { colorScheme } = useMantineColorScheme()
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000'

  const socialMediaIcons: { component: ReactNode; url: string }[] = [
    {
      component: <Github color={iconColor} size={32} />,
      url: 'https://www.github.com/Siamias202',
    },
    {
      component: <Linkedin color={iconColor} size={32} />,
      url: 'https://www.linkedin.com/in/kawsarsiam/',
    },
    {
      component: <Medium color={iconColor} size={32} />,
      url: 'https://medium.com/@kawsarahamed_4044',
    },
    
    {
      component: <Gmail color={iconColor} size={32} />,
      url: 'mailto:kawsarsiam445@gmail.com',
    },
  ]

  return (
    <Layout>
      <Box>
        <Title order={1} mb={30}>
          About
        </Title>
        <Text weight={500} mt={8}>
          <strong>Kawsar Ahamed Siam</strong>.
        </Text>
        <Text weight={500} mt={20}>
          Data Engineer and Machine Learning Enthusiast.
        </Text>
        <Text weight={500} mt={20}>
          I&apos;ve been working to improve myself in data engineering field
          since 2023 with a focus on backend applications. I enjoy
          learning new technologies and tools, writing blogs, and working on
          open source projects. 
        </Text>
        <Text weight={500} my={20}>
          
          <Anchor
            href="https://90pixel.com/"
            target="_blank"
            variant="link"
            weight={500}
            underline
          >
            <strong></strong>
          </Anchor>
          
        </Text>
        <Text weight={500} mt={20}>
          
        </Text>
        <Text weight={500} mt={20}>
          
          <Anchor
            variant="link"
            href="https://read.cv/aycanogut"
            target="_blank"
            weight={500}
            underline
          >
            <strong></strong>
          </Anchor>
        </Text>
      </Box>
      <Box>
        <Title order={2} mt={50} mb={30}>
          Contact Me
        </Title>
        <Group>
          {socialMediaIcons.map(
            (icon: { component: ReactNode; url: string }) => (
              <Anchor key={icon.url} href={icon.url} target="_blank">
                {icon.component}
              </Anchor>
            )
          )}
        </Group>
      </Box>
      <Box>
        <Title order={3} mt={50} mb={30}>
          My Github Stats
        </Title>
        <GitHubCalendar
          username="Siamias202"
          year="last"
          style={{ maxWidth: '960px' }}
        />
      </Box>
      
    </Layout>
  )
}

export default About
