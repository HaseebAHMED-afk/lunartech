import React from 'react'
import GlobalNav from './GlobalNav';
import MainNav from './MainNav'
import FirstDiv from './FirstDiv'
import Alert from './Alert'
import SecondDiv from './SecondDiv';

function App(){
    return <div>
        <Alert />
        <GlobalNav />
        <MainNav />
        <FirstDiv />
        <SecondDiv />
    </div>

}

export default App;