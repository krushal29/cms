import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import TeacherFooter from './TeacherFooter'

const TeacherLayout = ({children}) => {
  return (
    <div>
        <TeacherNavbar/>
        {children}
        <TeacherFooter/>
    </div>
  )
}

export default TeacherLayout