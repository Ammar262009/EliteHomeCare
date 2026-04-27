import React from 'react'
import { useParams } from 'react-router-dom'


const CoursesContent = () => {
    let params = useParams()
    console.log(params)
  return (
    <div>
        <h1>{params.id} Courses Content</h1>
    </div>
  )
}

export default CoursesContent