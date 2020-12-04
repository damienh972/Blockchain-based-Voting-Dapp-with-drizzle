import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Segment } from 'semantic-ui-react';
import Home from '../Home';
import Admin from '../Admin';
import ProposalRegistration from '../ProposalRegistration';
import Vote from '../Vote';
import WinningProposal from '../WinningProposal';
import Whitelist from '../Whitelist';
// import img from '../../assets/whitelistedOnly.png';
const Nav = ({ drizzle,account }) => {


  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (evt, name) => {
    console.log(name.name);
    setActiveItem(name.name);
  };
  console.log(account);
 
  return (
    <Router>
      <Segment className="navbar" inverted>
        <Menu className="navbar_container" inverted pointing secondary>  
          <Link to="/">
              <Menu.Item
                name="Home"
                active={activeItem === 'Home'}
                onClick={handleItemClick}
              />
            </Link>
            <Link to="/admin">
              <Menu.Item
                name="Admin"
                active={activeItem === 'Admin'}
                onClick={handleItemClick}
                href="/admin"
              />
             </Link>
             <Link to="/proposal-registration">
              <Menu.Item
                name="Proposal registration"
                active={activeItem === 'Proposal registration'}
                onClick={handleItemClick}
              />
            </Link>
            <Link to="/voting">
              <Menu.Item
                name="Voting "
                active={activeItem === 'Voting'}
                onClick={handleItemClick}
              />
             </Link>
             <Link to="/winning-proposal">
              <Menu.Item
                name="Winning proposal"
                active={activeItem === 'Winning proposal'}
                onClick={handleItemClick}
              />
            </Link>
            <Link to="/whitelist">
              <Menu.Item
                name="Whitelist"
                active={activeItem === 'Whitelist'}
                onClick={handleItemClick}
              />  
            </Link>
        </Menu>
      </Segment>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/admin'>
          <Admin
            account={account}
            drizzle={drizzle}
            //drizzleState={drizzleState}
          />
        </Route>
				<Route exact path='/proposal-registration'>
          <ProposalRegistration
            account={account}
            drizzle={drizzle}
            //drizzleState={drizzleState}
          />
        </Route>
				<Route exact path='/voting'>
           <Vote
            //account={account}
            drizzle={drizzle}
            //drizzleState={drizzleState}
           />
        </Route>
				<Route exact path='/winning-proposal'>
          <WinningProposal/>
        </Route>
				<Route exact path='/whitelist'>
          <Whitelist
            drizzle={drizzle}
            //drizzleState={drizzleState}
          />
        </Route>
			</Switch>
    </Router>
  );
};

export default Nav;
