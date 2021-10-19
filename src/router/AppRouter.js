import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "../components/pages/events/events";
import SignUp from "../components/pages/auth/Signin";
import Users from "../components/pages/users/users";
import Broadcast from "../components/pages/broadcastpost/broadcasts";
import Appshell from "../Appshell";
import MainContent from "../components/Dashboard/MainContent";
import AddEvent from "../components/pages/events/AddEvent";
import Admins from "../components/pages/users/admins";
import Speakers from "../components/pages/speakers/speakers";
import Ward from "../components/pages/sidebarPages/ward/AllWard";
import State from "../components/pages/sidebarPages/states/allStates";
import Federal from "../components/pages/sidebarPages/federal/allFederal";
import Senaterial from "../components/pages/sidebarPages/senatorial/allSenatorial";
import NominationCategory from "../components/pages/sidebarPages/nominationCat/allnominationCat";
import Statehouse from "../components/pages/sidebarPages/stateH/allStates";
import Lga from "../components/pages/sidebarPages/LGA/allLga";
import Gateway from "../components/pages/sidebarPages/gateway/allGateway";
import Country from "../components/pages/sidebarPages/country/allCountries";
import BroadcastType from "../components/pages/sidebarPages/broadcastType/allBroadcastType";
import DiscussionSpaceOwner from "../components/pages/sidebarPages/discussionSpaceOwner/allDiscussionSpaceOwner";
import Elected from "../components/pages/sidebarPages/electedPosition/allElectedPosition";
import DiscussionSpace from "../components/pages/sidebarPages/discussionSpaces/allDiscussionSpace";
import EventHost from "../components/pages/sidebarPages/eventHostType/allEventHostType";
import EventCategory from "../components/pages/sidebarPages/eventCategory/allEventCategory";
import NotificationType from "../components/pages/sidebarPages/notificationType/allNotificationType";
import ProtectedRoute from "../helpers/protectRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Appshell>
          <Route path="/dashboard">
            <MainContent />
          </Route>

          <ProtectedRoute exact path="/users"  component={Users}/>
          <ProtectedRoute exact path="/admins" component={Admins} />
          <ProtectedRoute exact path="/broadcasts" component={Broadcast} />
          <ProtectedRoute exact path="/speakers" component={Speakers} />
          <ProtectedRoute exact path="/general/events" component={Events} />
          <ProtectedRoute exact path="/event" component={AddEvent} />
          <ProtectedRoute exact path="/wards" component={Ward} />
          <ProtectedRoute exact path="/federals" component={Federal} />
          <ProtectedRoute exact path="/senatorials" component={Senaterial} />
          <ProtectedRoute exact path="/states" component={State} />
          <ProtectedRoute exact
            path="/nominationsCat"
            component={NominationCategory}
          />
          <ProtectedRoute exact path="/statehouse" component={Statehouse} />
          <ProtectedRoute exact path="/lga" component={Lga} />
          <ProtectedRoute exact path="/gateway" component={Gateway} />
          <ProtectedRoute exact path="/countries" component={Country} />
          <ProtectedRoute
            exact
            path="/broadcastType"
            component={BroadcastType}
          />
          <ProtectedRoute
            exact
            path="/discussionSpaceOwner"
            component={DiscussionSpaceOwner}
          />
          <ProtectedRoute exact path="/elected" component={Elected} />
          <ProtectedRoute
            exact
            path="/discussionSpaces"
            component={DiscussionSpace}
          />
          <ProtectedRoute exact path="/eventHost" component={EventHost} />
          <ProtectedRoute
            exact
            path="/eventCategory"
            component={EventCategory}
          />
          <ProtectedRoute
            exact
            path="/notificationType"
            component={NotificationType}
          />
        </Appshell>
      </Switch>
    </Router>
  );
};

export default AppRouter;
