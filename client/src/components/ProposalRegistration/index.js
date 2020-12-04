import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const ProposalRegistration = ({ drizzle, account }) => {


  const contract = drizzle.contracts.Voting;
  //let account = drizzle.accounts;
  console.log(drizzle);
  console.log(account);

  const [description, setDescription] = useState('');
 
  const registerProposal = async (proposal) => {
    //Interaction avec le smart contract pour ajouter un compte
    
     const register =  await contract.methods.addProposal(proposal).send( {gas:900000, from: account });
     console.log(register);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerProposal(description);
  };

  const handleChange = (evt, value) => {
    setDescription(value.value);
  };

  const fetchProposals = async () => {
    const proposals =  await contract.methods.getProposals().call( {from: account });
    console.log(proposals.map((proposal) => proposal))
  };


  return(

  <div>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Describe your proposal</label>
          <Form.Input
            placeholder="Enter description"
            value={description}
            onChange={handleChange}
          />
        </Form.Field>
      <Form.Field>
      <Checkbox label='Confirm' />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
    <Button
          color='orange'
          primary
          onClick={() => fetchProposals()}
    >
    get proposals
    </Button>
  </div>
);
  }

export default ProposalRegistration;
