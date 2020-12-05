const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const Voting = artifacts.require("Voting");

contract('Voting', function (accounts) {
    const admin = accounts[8];
    const voter1 = accounts[1];
    const voter2 = accounts[2];
    const voter3 = accounts[3];
    let VotingInstance;

    const status = {
        0 :'RegisteringVoters',
        1 :'ProposalsRegistrationStarted',
        2 :'ProposalsRegistrationEnded',
        3 :'VotingSessionStarted',
        4 :'VotingSessionEnded',
        5 :'VotesTallied'
    };

    beforeEach(async function () {
        VotingInstance = await Voting.new({from: admin});
    });

    it("Adminstrator should add a Voter to whitelist", async () => {

        let isVoterBefore = await VotingInstance.isVoter(voter1, {from: admin});
        expect(isVoterBefore).to.equal(false);

        await VotingInstance.addVoter(voter1, {from: admin});

        let isVoterAfter = await VotingInstance.isVoter(voter1, {from: admin});
        expect(isVoterAfter).to.equal(true);
    });

    it("Adminstrator should start proposal registration session", async () => {

        let beforeStatus = await VotingInstance.currState();
        expect(status[beforeStatus]).to.equal('RegisteringVoters');

        await VotingInstance.startProposalsSession({from: admin});

        let afterStatus = await VotingInstance.currState();
        expect(status[afterStatus]).to.equal('ProposalsRegistrationStarted');
    });
        
    it("Voter should register a proposal", async () => {

        await VotingInstance.addVoter(voter1, {from: admin});
        await VotingInstance.addVoter(voter2, {from: admin});
        await VotingInstance.addVoter(voter3, {from: admin});

        await VotingInstance.startProposalsSession({from: admin});

        let afterStatus = await VotingInstance.currState();
        expect(status[afterStatus]).to.equal('ProposalsRegistrationStarted');

        nbProposals = await VotingInstance.proposalId();

        await VotingInstance.addProposal('aaa', {from: voter1});
        await VotingInstance.addProposal('bbb', {from: voter2});
        await VotingInstance.addProposal('ccc', {from: voter3});

        expect(new BN(await VotingInstance.proposalId())).to.be.bignumber.above(new BN(nbProposals));
    });
    
});