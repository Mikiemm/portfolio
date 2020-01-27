import React from "react"
import { Grid, Box, Container } from "./Layout"
import { Title, Heading, Text, RoleText } from "../Typography/Typography"
export default {
  component: Grid,
  title: "Layout",
}

export const oneColumnContent = () => (
  <Container>
    <Grid>
      <Box width="7" styles={{ paddingRight: 40 }}>
        <Title>Challenge</Title>
        <Heading>
          Sucking at Something Is the First Step to Being Sorta Good at
          Something. No Matter What We Are Making, We’re Going to Suck at First
        </Heading>
      </Box>
    </Grid>
  </Container>
)

export const twoColumnContent = () => (
  <Container>
    <Grid>
      <Box width="7" styles={{ paddingRight: 40 }}>
        <Title>Challenge</Title>
        <Heading>
          Sucking at Something Is the First Step to Being Sorta Good at
          Something. No Matter What We Are Making, We’re Going to Suck at First
        </Heading>
      </Box>
      <Box width="5">
        <Text>
          Getting good at anything takes a long time and it's usually a{" "}
          <strong>pretty arduous process.</strong> Reddit founder Alexis Ohanian
          reminds us that no matter who you are and how much experience you
          have, <strong>you're going to suck at first.</strong>
        </Text>
        <Text>
          Speaking at a 99u conference, Ohanian's thesis here is pretty simple.
        </Text>
      </Box>
    </Grid>
  </Container>
)

export const myRoleContent = () => (
  <Container>
    <Grid>
      <Box width="7" styles={{ paddingRight: 40 }}>
        <Title>Challenge</Title>
        <Heading>
          Sucking at Something Is the First Step to Being Sorta Good at
          Something. No Matter What We Are Making, We’re Going to Suck at First
        </Heading>
        <Text>
          Getting good at anything takes a long time and it's usually a{" "}
          <strong>pretty arduous process.</strong> Reddit founder Alexis Ohanian
          reminds us that no matter who you are and how much experience you
          have, <strong>you're going to suck at first.</strong>
        </Text>
        <Text>
          Speaking at a 99u conference, Ohanian's thesis here is pretty simple.
        </Text>
      </Box>
      <Box width="5">
        <Title styles={{ marginBottom: 8 }}>My Role</Title>
        <RoleText>UI/UX Design, Branding</RoleText>

        <Title styles={{ marginBottom: 8 }}>Team</Title>
        <RoleText>
          Markéta Švidrnochová, design
          <br />
          David Duong, coding
        </RoleText>

        <Title styles={{ marginBottom: 8 }}>Timeframe</Title>
        <RoleText>2 months</RoleText>
      </Box>
    </Grid>
  </Container>
)


export const centerContent = () => (
  <Container>
    <Grid>
      <Box width="8" start="3" styles={{ textAlign: 'center' }}>
        <Title>Challenge</Title>
        <Heading>
          Sucking at Something
        </Heading>
        <Text>
          Getting good at anything takes a long time and it's usually a{" "}
          <strong>pretty arduous process.</strong> Reddit founder Alexis Ohanian
          reminds us that no matter who you are and how much experience you
          have, <strong>you're going to suck at first.</strong>
        </Text>
      </Box>
    </Grid>
  </Container>
)
