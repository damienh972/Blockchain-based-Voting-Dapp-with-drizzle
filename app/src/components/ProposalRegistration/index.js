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
    console.log(description);
     
    registerProposal(description);
  };
  const handleChange = (evt, value) => {
    setDescription(value.value);
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
  </div>
);
  }

export default ProposalRegistration;
