import React from 'react'

export default function DashboardLayout({children,user,admin,driver}:Readonly<{children:React.ReactNode,
user:React.ReactNode,
driver:React.ReactNode,
admin:React.ReactNode,
}>) {

    const role="admin"

  return (
      <>
      {role==="admin" && admin}
      {/* {children} */}
    </>
  )
}
