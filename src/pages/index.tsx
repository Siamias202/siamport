import {
  Html5,
  Javascript,
  Python,
  Fastapi,
  Docker,
  Googlecloud,
  
  
  
} from '@icons-pack/react-simple-icons'
import {APIManagement} from 'azure-react-icons';
import {
  Anchor,
  Box,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import useSWR from 'swr'

import Layout from '../components/Layout/Layout'
import Loader from '../components/Loader/Loader'
import useWidth from '../hooks/useWidth'
import { IArticleProps } from '../interfaces/Blog.interface'
import fetcher from '../lib/fetcher'


const Error = dynamic(() => import('../components/Error/Error'))

const HomePage = () => {
  const { data, error } = useSWR<IArticleProps>(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kawsarahamed_4044',
    fetcher
  )

  const { colorScheme } = useMantineColorScheme()
  const { width } = useWidth()

  if (!data) return <Loader />
  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Hello 🤙
      </Title>
      <Box>
        <Group position="apart">
          <Group direction="column" spacing={2}>
            <Text>This is Kawsar Ahamed Siam , Dhaka</Text>
            <Text>
              I love to&nbsp;
              <Anchor
                href="https://github.com/Siamias202"
                target="_blank"
                variant="link"
                weight={500}
                underline
              >
                <strong>build things</strong>
              </Anchor>
              &nbsp;with python and publish&nbsp;
              <Anchor
                href="https://medium.com/@kawsarahamed_4044"
                target="_blank"
                variant="link"
                weight={500}
                underline
              >
                <strong>blogs</strong>
              </Anchor>
              &nbsp;regularly.
            </Text>
            <Text mt={10}>
              Find out&nbsp;
              <Link href="/about" passHref prefetch={false}>
                <Anchor component="span" weight={500} underline>
                  <strong>more</strong>.
                </Anchor>
              </Link>
            </Text>
          </Group>
        </Group>
        <Group direction="column" mt={60}>
          <Title order={2}>Tech Stack</Title>
          <Paper py="lg" sx={{ background: 'rgba(0,0,0, 0.03)' }}>
            <Group position={width < 650 ? 'apart' : 'center'} spacing="lg">
              <Link
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
              >
                <Html5 color="#E34F26" size={70} />
              </Link>
              
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <Javascript color="#F7DF1E" size={70} />
              </Link>

              <Link href="https://python.org/" target="_blank">
                <Python color="#61DAFB" size={70} />
              </Link>

              <Link
                href="https://fastapi.tiangolo.com/"
                target="_blank"
              >
                <Fastapi color="#C6D3C8" size={70} />
              </Link>
            
              
              <Link href="https://cloud.google.com/" target="_blank">
                <Googlecloud color="#EFEEE9" size={70} />
              </Link>
              <Link href="https://azure.microsoft.com/en-us" target="_blank">
                <APIManagement color="#CC6699" size={'70'} />
              </Link>
              <Link href="https://www.docker.com/" target="_blank">
                <Docker color="#1D6E78" size={70} />
              </Link>
              
            </Group>
          </Paper>
        </Group>
        {data.items?.length && (
          <Group direction="column" mt={60}>
            <Title order={2}>Latest Blog</Title>
            <Stack spacing="xs">
              {data.items?.slice(0, 6).map((article: IArticleProps) => (
                <Text
                  key={article.title}
                  component="a"
                  href={article.link}
                  target="_blank"
                  color={colorScheme === 'dark' ? 'yellow' : 'dark'}
                  weight={700}
                  underline
                >
                  {article.title}
                </Text>
              ))}
            </Stack>
          </Group>
        )}
      </Box>
    </Layout>
  )
}

export default HomePage
