//import { useRouter } from "next/router";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { parseCookies } from "nookies";

export function middleware(req:NextRequest, ev:NextFetchEvent){
    const { pathname } = req.nextUrl
    if( pathname == '/admin' ){
        const {['@SCC/token']:token} = req.cookies;
        console.log("middleware-admin")
        //const router = useRouter()
        console.log("token", token)
        if (!token) {
            return NextResponse.redirect((new URL('/login', req.url)))
          }
        else
            return NextResponse.next();
    }

    if( pathname == '/login' ){
        const {['@SCC/token']:token} = req.cookies;
        console.log("middleware-admin")
        //const router = useRouter()
        console.log("token", token)
        if (token) {
            return NextResponse.redirect((new URL('/admin', req.url)))
          }
        else
            return NextResponse.next();
    }
    console.log("middleware")
    return NextResponse.next();
}