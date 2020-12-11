import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import './winningproposal.scss'

const WinningProposal = ({drizzle,account}) => {

  const [winner, setWinner] = useState(null)

  const contract = drizzle.contracts.Voting;
  let winningProposalId=null;
  const getWinningProposal = async () => {

    const proposals =  await contract.methods.getProposals().call( {from: account });
    console.log(proposals);

    let winningVoteCount=0;
	 	for (let id = 0; id < proposals.length; id++) {
	 		if (proposals[id].voteCount > winningVoteCount) {
	 			winningVoteCount = proposals[id].voteCount;
         winningProposalId = id;
       }
     } 
     setWinner(proposals[winningProposalId]);
  };

  console.log(winner)

  useEffect(() => {
    getWinningProposal();
	},[]);

  return (
    <div className="winningProposal" >
      <h1 className="page_title" >And the winner is :</h1>
      <Button
       className="winningProposal_button"
        color='olive'
        animated='vertical'
        onClick={() => getWinningProposal()}
      >
        <Button.Content visible>Get winner</Button.Content>
        <Button.Content hidden>
          Only Admin
        </Button.Content>
      </Button>
      {winner!=null && (
      <p>{winner.description}</p>
      )}
    </div>
  );
};

export default WinningProposal;
