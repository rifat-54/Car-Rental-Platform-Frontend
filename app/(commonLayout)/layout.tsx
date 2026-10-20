import React from 'react'

export default function CommonLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
      <>
      <div>Header</div>
    {children}
      <div>Footer</div>
    </>
  )
}
