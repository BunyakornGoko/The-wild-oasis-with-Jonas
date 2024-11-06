import React from "react"
import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles.js"
import Button from "./ui/Button.jsx"
import Input from "./ui/input.jsx"

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  )
}
