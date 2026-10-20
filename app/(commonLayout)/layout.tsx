import React from 'react'
import { Navbar } from './_component/share/Navbar'

export default function CommonLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
      <>
      {/* <div>Header</div> */}
      <Navbar/>
    {children}
      <div>Footer</div>
    </>
  )
}
