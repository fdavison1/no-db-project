import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Collection from './components/Collection'
import New from './components/New'

export default (
<Switch>
    <Route exact path='/' component={Collection}/>
    <Route path='/new' component={New}/>
</Switch>
)