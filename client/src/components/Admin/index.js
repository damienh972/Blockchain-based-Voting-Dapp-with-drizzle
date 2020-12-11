/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './admin.scss';

const Admin = (drizzle) => {
  const { account } = drizzle;
  const contract = drizzle.drizzle.contracts.Voting;
  const [address, setAddress] = useState('');

  const addWhitelist = async (voterAddress) => {
  // Interaction avec le smart contract pour ajouter un compte
    const addToWhitelist = contract.methods.addVoter(voterAddress).send({ from: account });
    // console.log(addToWhitelist);
    // Todo: fetch events
  };

  const startProposal = async () => {
    await contract.methods.startProposalsSession().send({ from: account });
  };

  const stopProposal = async () => {
    await contract.methods.endProposalSession().send({ from: account });
  };

  const startVoting = async () => {
    await contract.methods.startVotingSession().send({ from: account });
  };

  const stopVoting = async () => {
    await contract.methods.endVotingSession().send({ from: account });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addWhitelist(address);
  };
  const handleChange = (evt, value) => {
    setAddress(value.value);
  };

  return (
    <div className="admin">
      <h1 className="page_title">Manage your vote session</h1>
      <div className="admin_form">
        <h2 className="admin_form_title">Step 1: add voters on your whilelist</h2>
        <p className="admin_form_text">(Register the voters on whitelist voting session)</p>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label className="admin_form_label">Voter address</label>
            <Form.Input
              placeholder="Enter address"
              value={address}
              onChange={handleChange}
            />
          </Form.Field>
          <Button  color="green" type="submit">Submit</Button>
        </Form>
      </div>
      <div className="admin_functions">
        <div className="admin_functions_container">
          <h2 className="admin_functions_title">Step 2 : Start proposals time</h2>
          <p className="admin_functions_text">(Whitelisted people are allowed to register proposals)</p>
          <Button
            color="green"
            animated="vertical"
            onClick={() => startProposal()}
          >
            <Button.Content visible>Owner only</Button.Content>
            <Button.Content hidden>
              Start Proposal
            </Button.Content>
          </Button>
        </div>
        <div className="admin_functions_container">
          <h2 className="admin_functions_title">Step 3 : End proposals time</h2>
          <p className="admin_functions_text">(End of proposals registration)</p>
          <Button
            color="green"
            animated="vertical"
            onClick={() => stopProposal()}
          >
            <Button.Content visible>Owner only</Button.Content>
            <Button.Content hidden>
              Stop Proposals
            </Button.Content>
          </Button>
        </div>
        <div className="admin_functions_container">
          <h2 className="admin_functions_title">Step 4 : Start voting time</h2>
          <p className="admin_functions_text">(Whitelisted people are allowed to vote for the best proposals)</p>
          <Button
            color="green"
            animated="vertical"
            onClick={() => startVoting()}
          >
            <Button.Content visible>Owner only</Button.Content>
            <Button.Content hidden>
              Start voting
            </Button.Content>
          </Button>
        </div>
        <div className="admin_functions_container">
          <h2 className="admin_functions_title">Step 5 : End voting time</h2>
          <p className="admin_functions_text">(End of votes, go to the "winning proposal" page <a href="/winning-proposal">here</a>)</p>
          <Button
            color="green"
            animated="vertical"
            onClick={() => stopVoting()}
          >
            <Button.Content visible>Owner only</Button.Content>
            <Button.Content hidden>
              End voting
            </Button.Content>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
