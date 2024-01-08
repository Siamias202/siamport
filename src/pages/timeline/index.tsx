import { List, Timeline as MantineTimeline, Text, Title } from '@mantine/core'
import { Circle, CircleDashed } from 'tabler-icons-react'

import Layout from '../../components/Layout/Layout'

const Timeline = () => (
  <Layout>
    <Title order={1} mb={30}>
      Timeline
    </Title>
    <MantineTimeline active={1} color="violet">
      
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Started Bachelor in Computer Science and Engineering"
      >
        <List center icon>
        <List.Item>
            <Text color="dimmed" size="sm">
              <b>Institution</b>: Islamic University of Technology
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            <b>Location</b>: Boardbazar, Gazipur
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Gathered knowledge about OOP , Database Management System , Data Structure and Algorithms , Cloud Computing and Big Data, ML
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Developing ML model and Big data projects .
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          2020
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Passed Higher Secondary School Certificate Examination (HSC)"
        lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              <b>Institution</b>: Notre Dame College
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            <b>Location</b>: Motijheel, Dhaka
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            <b>Result</b>: GPA 5.00
            </Text>
          </List.Item>
          <Text size="xs" mt={4}>
          2019
        </Text>
         
        </List>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="Passed Secondary School Certificate Examination (SSC)"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
        lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              <b>Institution</b>: Safiuddin Sarakar Academy
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            <b>Location</b>: Tongi, Gazipur
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            <b>Result</b>: GPA 5.00
            </Text>
          </List.Item>
         
        </List>
        <Text size="xs" mt={4}>
          2017
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="Born"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
      >
        <Text size="xs" mt={4}>
          2000
        </Text>
      </MantineTimeline.Item>
    </MantineTimeline>
  </Layout>
)

export default Timeline
