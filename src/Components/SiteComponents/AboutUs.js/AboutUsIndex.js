import React from 'react'
import Registration from '../Registration'
import AboutUsBanner from './AboutUsBanner'
import ArthritisRx from './ArthritisRx'
import FoundingTeams from './FoundingTeams'
import JoinTeam from './JoinTeam'
import LeadershipTeams from './LeadershipTeams'
import ScientificTeam from './ScientificTeam'

export default function AboutUsIndex() {
  return (
    <>
        <AboutUsBanner/>
        <ArthritisRx/>
        <FoundingTeams/>
        <LeadershipTeams/>
        <ScientificTeam/>
        <JoinTeam/>
        <Registration/>
    </>
  )
}
