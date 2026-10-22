/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/signup"];

export default function proxy(request:NextRequest) {
    // console.log("Proxy request",request);
    const {pathname}=request.nextUrl
    console.log("Proxy pathname",pathname);

    const accessToken=request.cookies.get("accessToken")?.value;
    // console.log(accessToken)

    let userRole=null;

    if(accessToken) {
        try {
            const decodedToken=jwt.verify(accessToken,process.env.JWT_SECRET as string) as jwt.JwtPayload;
            userRole=decodedToken.role;
        } catch (error) {
            const response=NextResponse.redirect(new URL("/login",request.url));    
            response.cookies.delete("accessToken");
            response.cookies.delete("refreshToken");
            return response;
        }
    } 

    if(accessToken && ["/login","/register"].includes(pathname)) {
        return NextResponse.redirect(new URL("/",request.url));
    }


const isPublicRoute=publicRoutes.some((route)=>pathname.startsWith(route));

if(!isPublicRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login",request.url));
}


 const roleGroup: Record<string, string[]> = {
    admin: ["/admin-dashboard", "/admin-settings", "/manage-users"],
    user: ["/dashboard", "/profile", "/rent"],
    driver: ["/driver-dashboard", "/driver-profile", "/bit"],
  };


  for(const role in roleGroup) {
    const routes=roleGroup[role];
    if(routes.some((route)=>pathname.startsWith(route))) {
        if(userRole!==role) {
            const targatedRoute=getDashboardRoute(userRole);
            return NextResponse.redirect(new URL(targatedRoute,request.url));
        }
        
    }
  }


    return NextResponse.next()
  
}

function getDashboardRoute(role:string|null){
    if(role==="admin") {
        return "/admin-dashboard";
    }
    if(role==="user") {
        return "/dashboard";
    }   
    if(role==="driver") {
        return "/driver-dashboard";
    }
    return "/";
}
