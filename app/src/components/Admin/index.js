import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';


const Admin = (drizzle) => {

  console.log(drizzle);
  
  let account = drizzle.account;
  const contract = drizzle.drizzle.contracts.Voting;
  const [address, setAddress] = useState('');

  console.log(contract);
  
  const addWhitelist = async (address) => {
  // Interaction avec le smart contract pour ajouter un compte
    const addToWhitelist = contract.methods.addVoter(address).send({ from: account });
    console.log(addToWhitelist)
  }

  const startProposal = async () => {

    await contract.methods.startProposalsSession().send({ from: account })
     console.log(contract.methods.proposalsStart);
  }

  const stopProposal = async () => {

    await contract.methods.endProposalSession().send({ from: account })
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
     console.log(address);
     addWhitelist(address);
  };
  const handleChange = (evt, value) => {
    setAddress(value.value);
  };

  return (
    <div>
      <div>
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
        <Button
          color='olive'
          animated='vertical'
          primary
          onClick={() => startProposal()}
        >
          <Button.Content visible>Owner only</Button.Content>
          <Button.Content hidden>
            Start Proposal
          </Button.Content>
        </Button>
        <Button
          color='yellow'
          animated='vertical'
          primary
          onClick={() => stopProposal()}
        >
          <Button.Content visible>Owner only</Button.Content>
          <Button.Content hidden>
            Stop Proposals
          </Button.Content>
        </Button>
       </div>
       <div>
       </div>
    </div>
  );
};

export default Admin;
