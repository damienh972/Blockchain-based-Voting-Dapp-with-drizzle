import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Img from '../../assets/whitelistedOnly.png';

const Whitelist = ({ drizzle, drizzleState }) => {

 

  const contract = drizzle.contracts.Voting;
  const [addresses, setAddresses] = useState(null);
  const noVoters = 'No voters registered';

  const getWhitelist = async() => {
    
    console.log(contract);
    // récupérer la liste des comptes autorisés
    const whitelist = await contract.methods.getAddresses().call();
    // Mettre à jour le state 
    console.log(whitelist);

    if(whitelist!=null) {
      setAddresses(whitelist);
    } else {
      setAddresses(noVoters);
    }
  }; 

 
  return(
    <div>
      <h1>Whitelist</h1>
      <img className='whitelist' src={Img} />
      <Button
        color='olive'
        animated='vertical'
        primary
        onClick={() => getWhitelist()}
       >
        <Button.Content visible>Owner only</Button.Content>
        <Button.Content hidden>
          Get whitelist
        </Button.Content>
      </Button>
      {addresses!==null && addresses!==noVoters && (
        addresses.map((address) =>
          <p key={address}>{address}</p>
      ))}
      {addresses===noVoters &&(
      <p>{noVoters}</p>
      )}
    </div>
  );
}
export default Whitelist;
