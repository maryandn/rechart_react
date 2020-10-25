import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Recharts from "./rechart";

export default ()=>{

    return(
        <Switch>
            <Route path='/:id' component={Recharts} />
        </Switch>
    )
}
