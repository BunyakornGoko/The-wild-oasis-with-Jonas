import React from "react"
import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles.js"
import Button from "./ui/Button.jsx"
import Input from "./ui/input.jsx"
import Heading from "./ui/Heading.jsx"

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The wild Oasis</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  )
}
