"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import {useFormStatus } from 'react-dom'

export default function ActionButtion({children}:{children:React.ReactNode}) {
    const {pending}=useFormStatus()

  return (
    <Button>
        {pending?"Loading...":children}
    </Button>
  )
}
