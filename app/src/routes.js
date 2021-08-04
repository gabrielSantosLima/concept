import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ListNotes from './pages/ListNotes'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/notes">
                    <ListNotes />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes