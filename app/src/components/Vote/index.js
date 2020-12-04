import React, { useState } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react'


const Vote = ({ drizzle, drizzleState, account }) => {

  const contract = drizzle.contracts.Voting;
  const proposalList=[];
  const getProposals = async () => {
    let proposalsCount = await contract.methods.getProposalLength().call({from:account});
    console.log(proposalsCount);
    for(let i=0;i<proposalsCount;i++) {
    let proposals = await contract.methods.getProposalById(i).call({from:account});
    proposalList.push(proposals);
    
    }
  };
  getProposals();
  console.log(proposalList);

  const [vote, setVote] = useState('');
 
  const registerVote = async (proposal) => {
    //Interaction avec le smart contract pour ajouter un compte
    await contract.methods.addVote(proposal).send({from:account});
   
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
     
    registerVote(vote);
  };
  const handleChange = (evt, value) => {
    setVote(value.value);
  };

  return (
    <div>
      <h1>Vote</h1>
      <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Proposal number</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {proposalList.length!==0 && (
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      )}
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>



      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Vote for your proposal</label>
            <Form.Input
              placeholder="Enter vote"
              value={vote}
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

export default Vote;
