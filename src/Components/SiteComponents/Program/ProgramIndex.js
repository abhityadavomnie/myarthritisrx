import React from 'react'
import BenifitSection from '../BenifitSection'
import Registration from '../Registration'
import OurProgram from './OurProgram'
import ProgramBanner from './ProgramBanner'
import ProgramBenifit from './ProgramBenifit'
import ProgramFaq from './ProgramFaq'
import WeekProgram from './WeekProgram'

export default function ProgramIndex() {
  return (
   <>
    <ProgramBanner/>
    <WeekProgram/>
    <OurProgram/>
    <ProgramBenifit/>
    <ProgramFaq/>
    <Registration/>
   </>
  )
}
