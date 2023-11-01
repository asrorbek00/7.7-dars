import { NextResponse } from "next/server";
import courses from "../data.json"

export function GET (){
     return NextResponse.json(courses)
}