/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { cookies } from 'next/headers';
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

export default async function loginAction( preState:any, fromData:any ) {

try {
    const email=fromData.get("email");
    const password=fromData.get("password");
    if(!email || !password) {
        return {
            success:false,
            message:"Email and password are required"
        }
    }
    const response=await fetch("http://localhost:5000/api/v1/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    const data=await response.json();
    console.log("LoginAction data",data);

    const {accessToken,refreshToken}=data.data;

    const cookieOptions=await cookies()

    cookieOptions.set("accessToken",accessToken,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        path:"/",
    })

    cookieOptions.set("refreshToken",refreshToken,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        path:"/",
    })

    return {
        success:true,
        message:"Login successful",
        data
    }
} catch (error) {
    console.error("LoginAction error",error);
    return {
        success:false,
        message:"An error occurred while logging in"
    }
}
}