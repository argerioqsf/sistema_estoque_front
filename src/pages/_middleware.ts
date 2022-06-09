import { useRouter } from "next/router";
import { NextFetchEvent, NextRequest } from "next/server";
import { parseCookies } from "nookies";

export function middleware(req:NextRequest, ev:NextFetchEvent){
    const { pathname } = req.nextUrl
    if( pathname == '/admin/' ){
        const {['@SCC/token']:token} = parseCookies();
        const router = useRouter()
        if (!token) {
            router.push('/login')
          }
    }
}