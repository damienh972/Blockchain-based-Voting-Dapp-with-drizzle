import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Voting from "./contracts/Voting.json";


const options = {
  web3: {
    // block: true,
    customProvider: new Web3("http://localhost:7545"),
    gas: 900000,
  },
  contracts: [SimpleStorage, ComplexStorage, Voting],
  events: {
    Voting: [
      "VoterRegistered",
      "ProposalsRegistrationStarted",
      "ProposalRegistered",
      "ProposalsRegistrationEnded",
      "VotingSessionStarted",
      "VotingSessionEnded",
      "Voted",
      "VotesTallied",
      "WorkflowStatusChange"
    ],
  },
};

export default options;F
