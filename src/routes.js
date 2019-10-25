import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Collection from './components/Collection'
import New from './components/New'
import Front from './components/Card'
import Back from './components/Back'

export default (
<Switch>
    <Route exact path='/' component={Collection}/>
    <Route path='/new' component={New}/>
    <Route path='/front' component={Front}/>
    <Route path='/back' component={Back}/>
</Switch>
)