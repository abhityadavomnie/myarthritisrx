import React from 'react'
import Registration from '../Registration'
import AboutArthritisBanner from './AboutArthritisBanner'
import ArthritisDetail from './ArthritisDetail'
import ArthritisFaq from './ArthritisFaq'
import ArthritisTypes from './ArthritisTypes'
import BasicAnatomy from './BasicAnatomy'
import Glossary from './Glossary'
import IncidencePrevilience from './IncidencePrevilience'
import JointPrevention from './JointPrevention'
import RiskFactor from './RiskFactor'
import SignAndSymptoms from './SignAndSymptoms'
import Stages from './Stages'
import Treatment from './Treatment'

export default function AboutArthritisIndex() {
    return (
        <>
            <AboutArthritisBanner/>
            {/* <ArthritisDetail/> */}
            <ArthritisTypes/>
            <BasicAnatomy/>
            <SignAndSymptoms/>
            <Stages/>
            <IncidencePrevilience/>
            <RiskFactor/>
            <JointPrevention/>
            <Treatment/>
            <ArthritisFaq/>
            <Glossary/>
            <Registration/>
        </>
    )
}
