import React from 'react'

export default async function CarDetailsPage({params}:{params:Promise<{id:string}>}) {
    const {id}=await params;
    const res=await fetch(`http://localhost:5000/api/v1/cars/${id}`)
    const {data}=await res.json()
  return (
    <div>CarDetails Id {id}
    <div>
        {JSON.stringify(data)}
    </div>
    </div>
  )
}
