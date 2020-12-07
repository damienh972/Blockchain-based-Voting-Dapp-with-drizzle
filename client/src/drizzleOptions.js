import Web3 from 'web3';
import ComplexStorage from './contracts/ComplexStorage.json';
import SimpleStorage from './contracts/SimpleStorage.json';
import Voting from './contracts/Voting.json';

const options = {
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545',
    },
  },
  contracts: [SimpleStorage, ComplexStorage, Voting],
  events: {
    Voting: [
      'VoterRegistered',
      'ProposalsRegistrationStarted',
      'ProposalRegistered',
      'ProposalsRegistrationEnded',
      'VotingSessionStarted',
      'VotingSessionEnded',
      'Voted',
      'VotesTallied',
      'WorkflowStatusChange',
    ],
  },
};

export default options;
