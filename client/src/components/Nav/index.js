import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Segment } from 'semantic-ui-react';
import Home from '../Home';
import Admin from '../Admin';
import ProposalRegistration from '../ProposalRegistration';
import Vote from '../Vote';
import WinningProposal from '../WinningProposal';
import Whitelist from '../Whitelist';
import './navigation.scss';

const Nav = ({ drizzle, account }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (evt, name) => {
    setActiveItem(name.name);
  };

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
              name="Voting"
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
      <footer className="footer">
        <div className="footer_container">
          <p className="footer_item copyright">Everyone vote - 2020 </p>
          <a className="footer_item help">Need help ?</a>
        </div>
      </footer>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin
            account={account}
            drizzle={drizzle}
          />
        </Route>
        <Route exact path="/proposal-registration">
          <ProposalRegistration
            account={account}
            drizzle={drizzle}
          />
        </Route>
        <Route exact path="/voting">
          <Vote
            drizzle={drizzle}
          />
        </Route>
        <Route exact path="/winning-proposal">
          <WinningProposal
            account={account}
            drizzle={drizzle}
          />
        </Route>
        <Route exact path="/whitelist">
          <Whitelist
            drizzle={drizzle}
          />
        </Route>
      </Switch>
    </Router>
  );
};

Nav.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.isRequired,
};

export default Nav;
