import React from 'react'
import Banner from './Banner'
import BenifitSection from './BenifitSection'
import ManageExcercice from './ManageExcercice'
import PersonalTreatmentPlan from './PersonalTreatmentPlan'
import Registration from './Registration'
import WhiteBlock from './WhiteBlock'

export default function Home() {
    return (
        <>
            <Banner />
            <PersonalTreatmentPlan />
            <BenifitSection />
            <WhiteBlock />
            <ManageExcercice />
            <Registration />
        </>
    )
}
