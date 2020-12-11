import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  TextArea,
} from 'semantic-ui-react';
import './proposalregistration.scss';

const ProposalRegistration = ({ drizzle, account }) => {
  const contract = drizzle.contracts.Voting;
  const [description, setDescription] = useState('');
  const registerProposal = async (proposal) => {
    // Interaction avec le smart contract pour ajouter un compte
    const register = await contract.methods.addProposal(proposal).send({gas: 900000, from: account });
    // console.log(register);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerProposal(description);
  };

  const handleChange = (evt, value) => {
    setDescription(value.value);
  };

  return (

    <div className="propregistration">
      <h1 className="page_title">Register your proposal</h1>
      <Form className="propregistration_form" onSubmit={handleSubmit}>
        <Form.Field>
          <label className="propregistration_form_label">Describe your proposal</label>
          <Form.Input
            control={TextArea}
            placeholder="Enter description"
            value={description}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field className="propregistration_form_checkbox">
          <Checkbox label="Confirm" />
        </Form.Field>
        <Button color="green" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

ProposalRegistration.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.shape({
    contracts: PropTypes.shape({
      Voting: PropTypes.shape({
        methods: PropTypes.shape({
          addProposal: PropTypes.func.isRequired,
          getProposals: PropTypes.func.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProposalRegistration;
