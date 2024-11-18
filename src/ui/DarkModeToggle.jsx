import React from "react"
import ButtonIcon from "./ButtonIcon"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { useDarkmode } from "../context/DarkModeContext"

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkmode()
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}
