
"use client"
import CourseSearch from '../components/CourseSearch'
import Courses from '../components/Courses'


import React, { useEffect, useState } from 'react'
import Loading from '../app/loading'

function HomePage() {
  const [courses, setCourse] = useState(null)
    const [isPending , setIsPending] = useState(true)

    useEffect(()=>{
        const getData = async ()=>{
            const req = await fetch("/api/courses")
            const data = await req.json()
            setCourse(data)
            setIsPending(false)
        }
        getData()
    },[])

    if(isPending){
        return <Loading/>
    }
  return (
    <div>
      <h1>HomePage</h1>
      <CourseSearch getSearchCourses={(searchCourse) => setCourse(searchCourse)}/>
      <Courses courses={courses}/>
    </div>

  )
}

export default HomePage