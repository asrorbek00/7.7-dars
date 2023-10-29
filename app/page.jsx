import Link from 'next/link'
import React from 'react'
import About from './about/page'
import Team from './about/team/page'
import CourseSearch from '../components/CourseSearch'

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <CourseSearch/>
    </div>

  )
}

export default HomePage