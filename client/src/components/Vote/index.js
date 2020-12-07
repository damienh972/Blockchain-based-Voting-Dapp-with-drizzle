import React, { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Table,
} from 'semantic-ui-react';

const Vote = ({ drizzle, account }) => {
  const [listProposals, setListProposals] = useState([]);
  const [vote, setVote] = useState('');
  const contract = drizzle.contracts.Voting;

  const getProposals = async () => {
    let proposals = await contract.methods.getProposals().call({ from:account });
    setListProposals(proposals);
    return proposals;
  };

  const registerVote = async (proposal) => {
    // Interaction avec le smart contract pour ajouter un compte
    let vote = await contract.methods.addVote(proposal).send({ from:account });
    // console.group(vote);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerVote(vote);
  };
  const handleChange = (evt, value) => {
    console.log(value.value - 1);
    setVote(value.value);
  };
  useEffect(() => {
    getProposals();
	}, []);

  return (
    <div>
      <h2>Contact your administrator if you're not in whilelist</h2>
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Proposal number</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {listProposals.lenght!==0 &&(
            listProposals.map((proposal, index) => (
              <Table.Row key={index}>
                <Table.Cell key={index}>{index+1}</Table.Cell>
                <Table.Cell key={`${index}_${proposal}`}>{proposal.description}</Table.Cell>
              </Table.Row>
            )))}
        </Table.Body>
      </Table>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Vote for your proposal</label>
          <Form.Input
            placeholder="Enter proposal number"
            value={vote}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Confirm" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Vote;
