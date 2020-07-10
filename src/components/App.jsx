import React from 'react'
import GlobalNav from './GlobalNav';
import MainNav from './MainNav'
import FirstDiv from './FirstDiv'
import Alert from './Alert'
import SecondDiv from './SecondDiv';
import MainHeading from './MainHeading'
import StrategicPartner from './StrategicPartners';
import Footer from './Footer';


function App(){
    return <div>
        <Alert />
        <GlobalNav />
        <MainNav />
        <FirstDiv />
        <SecondDiv />
        <MainHeading heading="Our Strategic Partners" headingClass="main-headings" para="Who have supported us over the years." paraClass="para-class" />
        <StrategicPartner />
        <Footer content="© Haseeb Ahmed Enterprise" />
    </div>

}

export default App;