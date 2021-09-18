
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from "../components/pages/events/events"
import SignUp from '../components/pages/auth/Signin';
import Users from '../components/pages/users/users';
import Broadcast from '../components/pages/broadcastpost/broadcasts';
import Appshell from '../Appshell';
import MainContent from "../components/Dashboard/MainContent"
import AddEvent from "../components/pages/events/AddEvent"
import AddSpeaker from "../components/pages/speakers/addSpeaker"
import Admins from "../components/pages/users/admins"
import Speakers from "../components/pages/speakers/speakers"
import Ward from "../components/pages/others/Ward"
import State from "../components/pages/others/State"
import Federal from "../components/pages/others/Federal"
import Senaterial from "../components/pages/others/Senatorial"
import NominationCategory from "../components/pages/others/NominationCategory"
import Statehouse from "../components/pages/others/StateHouse"
import Lga from "../components/pages/others/Lga"
import Gateway from "../components/pages/others/Gateway"
import Country from "../components/pages/others/Country"
import BroadcastType from "../components/pages/others/BroadcastType"
import DiscussionSpaceOwner from "../components/pages/others/DiscussionSpaceOwner"
import Elected from "../components/pages/others/ElectedPosition"
import DiscussionSpace from "../components/pages/others/DiscussionSpaces"
import EventHost from "../components/pages/others/EventHosType"
import EventCategory from "../components/pages/others/EventCategory"
import NotificationType from "../components/pages/others/NotificationType"




const AppRouter = () => {


  return (
    <Router>
  
      <Switch>
        <Route path='/' exact component={SignUp} />
        <Route path="/dashboard">
          <Appshell>
          <MainContent/>
          </Appshell>
          </Route>

          <Route exact path="/users">
          <Appshell>
          <Users/>
          </Appshell>
          </Route>

          <Route exact path="/admins">
          <Appshell>
          <Admins/>
          </Appshell>
          </Route>
        
          <Route exact path="/broadcasts">
          <Appshell>
          <Broadcast/>
          </Appshell>
          </Route>
          
          <Route exact path="/speakers">
          <Appshell>
          <Speakers/>
          </Appshell>
          </Route>
          <Route exact path="/general/events">
          <Appshell>
          <Events/>
          </Appshell>
          </Route>
          <Route exact path="/event">
          <Appshell>
          <AddEvent/>
          </Appshell>
          </Route>
          <Route exact path="/wards">
          <Appshell>
          <Ward/>
          </Appshell>
          </Route>
          <Route exact path="/federals">
          <Appshell>
          <Federal/>
          </Appshell>
          </Route>
          <Route exact path="/senatorials">
          <Appshell>
          <Senaterial/>
          </Appshell>
          </Route>
          <Route exact path="/states">
          <Appshell>
          <State/>
          </Appshell>
          </Route>
          <Route exact path="/nominationsCat">
          <Appshell>
          <NominationCategory/>
          </Appshell>
          </Route>
          <Route exact path="/statehouse">
          <Appshell>
          <Statehouse/>
          </Appshell>
          </Route>
          <Route exact path="/lga">
          <Appshell>
          <Lga/>
          </Appshell>
          </Route>
          <Route exact path="/gateway">
          <Appshell>
          <Gateway/>
          </Appshell>
          </Route>
          <Route exact path="/countries">
          <Appshell>
          <Country/>
          </Appshell>
          </Route>
          <Route exact path="/broadcastType">
          <Appshell>
          <BroadcastType/>
          </Appshell>
          </Route>
          <Route exact path="/discussionSpaceOwner">
          <Appshell>
          <DiscussionSpaceOwner/>
          </Appshell>
          </Route>
          <Route exact path="/elected">
          <Appshell>
          <Elected/>
          </Appshell>
          </Route>
          <Route exact path="/discussionSpaces">
          <Appshell>
          <DiscussionSpace/>
          </Appshell>
          </Route>
          <Route exact path="/eventHost">
          <Appshell>
          <EventHost/>
          </Appshell>
          </Route>
          <Route exact path="/eventCategory">
          <Appshell>
          <EventCategory/>
          </Appshell>
          </Route>
          <Route exact path="/notificationType">
          <Appshell>
          <NotificationType />
          </Appshell>
          </Route>
          
      </Switch>
    </Router>
  );
};

export default AppRouter;