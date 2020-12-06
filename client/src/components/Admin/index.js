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
    console.log(addToWhitelist);
  };

  const startProposal = async () => {
    await contract.methods.startProposalsSession().send({ from: account });
    console.log(contract.methods.proposalsStart);
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
    console.log(address);
    addWhitelist(address);
  };
  const handleChange = (evt, value) => {
    setAddress(value.value);
  };

  return (
    <div className="admin">
      <div className="admin_form">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Voter address</label>
            <Form.Input
              placeholder="Enter address"
              value={address}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <div className="admin_buttons">
        <Button
          color="olive"
          animated="vertical"
          primary
          onClick={() => startProposal()}
        >
          <Button.Content visible>Owner only</Button.Content>
          <Button.Content hidden>
            Start Proposal
          </Button.Content>
        </Button>
        <Button
          color="yellow"
          animated="vertical"
          primary
          onClick={() => stopProposal()}
        >
          <Button.Content visible>Owner only</Button.Content>
          <Button.Content hidden>
            Stop Proposals
          </Button.Content>
        </Button>
        <Button
          color="orange"
          primary
          onClick={() => startVoting()}
        >
          Start voting session
        </Button>
        <Button
          color="orange"
          primary
          onClick={() => stopVoting()}
        >
          End voting session
        </Button>
      </div>
    </div>
  );
};

export default Admin;
