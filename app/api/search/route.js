import { NextResponse } from "next/server";
import courses from "../data.json"
 export function GET(request){
    const {searchParams} = new URL(request.url)
    const query = searchParams.get("query")


    const filteredCourse =  courses.filter((course) =>{
        return course.title.toLowerCase().includes(query.toLocaleLowerCase())
    })
    return NextResponse.json(filteredCourse)
 }