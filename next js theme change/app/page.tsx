"use client"

import { useTheme } from "next-themes"

export default function Home() {
  const {theme, setTheme} = useTheme();
  return (
    <div>
      <button type = "button" onClick={() => setTheme("light")}>{theme === 'dark' ? 'light' : 'dark'}</button>
    </div>
  )
}
