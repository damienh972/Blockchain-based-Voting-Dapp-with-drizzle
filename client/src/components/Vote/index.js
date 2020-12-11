import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Table,
} from 'semantic-ui-react';

import './vote.scss';

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
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerVote(vote);
  };
  const handleChange = (evt, {value}) => {
    
    console.log(value)
    setVote(value);
  };

  useEffect(() => {
    getProposals();
  }, []);

  return (
    <div className="vote">
      <div id="vote_animation" />
      <h1 className="page_title">Vote for your prefered proposal</h1>
      <Table className="vote_table" celled inverted selectable>
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
      <Form className="vote_form" onSubmit={handleSubmit}>
      {listProposals.lenght!==0 &&(
         listProposals.map((proposal, index) => (
         <Form.Radio
            className="vote_form_radio"
            key={index}
            label={`Proposal ${index+1}`}
            value={index}
            checked={vote === index}
            onChange={handleChange}
          />
           )))}
        <Button color="green" className="vote_form_button" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Vote;
