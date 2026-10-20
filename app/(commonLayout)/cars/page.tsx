/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'

export default async function CarPage() {
    const res=await fetch(`http://localhost:5000/api/v1/cars`)
    const {data}=await res.json()
    console.log("Car data",data)
  return (
    <div>CarPage
        <ul>
           {
            data.map((car:any)=>(
                <li key={car.id}>
                    {car.brand} {car.model}
                    <Link href={`/cars/${car.id}`}>View Details</Link>
                </li>
            ))
           }
        </ul>
    </div>
  )
}
