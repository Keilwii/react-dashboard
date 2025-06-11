import React from 'react';
import Accordion from '../components/Accordion'; // Import the Accordion component
import './Docs.css'; // Import the new CSS for table styling

const Docs = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">
        VeRecycle Docs
      </h1>
      <div className="space-y-4">
        {/* BASICS Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 border-l-4 border-green-500 pl-4">Basics</h2>
        <Accordion title="How We Distribute Rewards">
          <p>Rewards are distributed equally among all users who have submitted at least one approved submission during the ongoing allocation round.</p>
          <p>Rewards are sent straight to each participant's wallet once a week on Tuesdays, after allocation rounds.</p>
          <p>We do not reward you based on the number of bottles you have deposited, as we do not want to incentivize people to use any more plastic bottles than they have previously used.</p>
          <p>As long as you have one approved submission during the ongoing round, you will be part of that week's reward recipients.</p>
        </Accordion>
        <Accordion title="Wallet Eligibility & VeDucks NFTs">
          <p>This table outlines the reward tiers based on your wallet's status.</p>
          <table className="docs-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Can make submissions?</th>
                <th>Rewards</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>default</td><td>Yes</td><td>5%</td></tr>
              <tr><td>KYC verified on vet.domains</td><td>Yes</td><td>100%</td></tr>
              <tr><td>VeChain Node holder</td><td>Yes</td><td>100%</td></tr>
              <tr><td>dApp endorser</td><td>Yes</td><td>150% to all our team's dApps</td></tr>
              <tr><td>Wallet holds VeDucks NFT</td><td>Yes</td><td>200%</td></tr>
              <tr><td>dApp endorser + VeDucks NFT</td><td>Yes</td><td>250% to all our team's dApps</td></tr>
              <tr><td>Wallet holds Rank 1 VeDucks NFT</td><td>Yes</td><td>500%</td></tr>
              <tr><td>dApp endorser + Rank 1 VeDucks NFT</td><td>Yes</td><td>550% to all our team's dApps</td></tr>
            </tbody>
          </table>
          <h3 className="text-xl font-semibold mt-4 mb-2">VeDucks NFTs</h3>
          <p>Users who aren't VeChain Node holders and who do not prefer KYC verifying themselves, can still access our dApps by the means of holding a single VeDucks NFT.</p>
          <p>VeDucks is a limited 1500 NFT collection that provides an alternative way for users to prove their wallet's legitimacy or just to support our causes and dApps.</p>
          <p>Holding a VeDucks NFT also gives a reward multiplier of at least 2x. Holding a Rank 1 VeDucks will give a 5x reward multiplier instead.</p>
          <p>There are 10x Rank 1 VeDucks on public circulation, and they can be randomly minted with some good luck.</p>
          <p>A singular VeDucks NFT can be used to receive multiplier rewards for one wallet / round only. For example, you can not transfer your VeDucks NFT to multiple wallets to receive multiplied rewards for all wallets.</p>
          <p>If you purchase a VeDucks NFT from the World of V marketplace from a seller who has already made a submission during the current round, you will not receive multiplied rewards from that round. To assure that you'll receive multiplied rewards from the current round, you can mint your own VeDucks NFT.</p>
          <p className="font-bold mt-2">NOTE: You will receive multiplied rewards only from submissions that are made after the acquirement of your VeDucks NFT.</p>
          <p>We reserve the right to blacklist specific VeDucks NFTs from receiving multiplied rewards and from being used as an user authentication method at any given point without notice, if we find that you have even tried to farm any of our dApps.</p>
          <p className="italic mt-2">A VeDucks NFT is not a financial investment and should not be treated as such. Purchasing a VeDucks NFT is merely a way to show your support for our team.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Node Holders</h3>
          <p>If you delegate your node, the benefits of node holding (reward multipliers, dApp access) are only applicable on the wallet addresses where you have delegated your node.</p>
          <p>Delegating to veDelegate is not currently supported, as we can not properly track those wallet addresses.</p>
          <p className="mt-4">Mint your VeDucks NFT on World of V, here: <a href="https://worldofv.art/business/claim/veducks" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">https://worldofv.art/business/claim/veducks</a></p>
        </Accordion>
        
        {/* SUBMISSIONS Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 border-l-4 border-green-500 pl-4">Submissions</h2>
        <Accordion title="How To Make An Approved Submission">
          <p className="font-semibold">VeRecycle accepts two kinds of submission pictures:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Categorized trashes</li>
            <li>Bottle deposits at bottle-deposit machines</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Submission Picture Requirements:</h4>
          
          <h5 className="text-md font-semibold mt-3">Categorized Trashes:</h5>
          <ul className="list-disc list-inside ml-4">
            <li>Picture contains trashes that are categorized into at least two different categories (e.g., plastics and metals).</li>
          </ul>
          <p className="italic ml-4 mt-1 text-gray-500">[Example Picture of Categorized Trashes]</p>
          
          <h5 className="text-md font-semibold mt-3">Bottle Deposits:</h5>
          <ul className="list-disc list-inside ml-4">
            <li>Picture contains a physical receipt.</li>
            <li>All of the text in the receipt is clear and readable.</li>
            <li>Picture also shows the bottle deposit machine in the background.</li>
            <li>The date on the receipt matches the date of submission.</li>
          </ul>
          <p className="italic ml-4 mt-1 text-gray-500">[Example Picture of Bottle Deposit]</p>

          <p className="font-bold mt-2">You can make two submissions per allocation round.</p>
          <p className="mt-2 text-red-400">If any of these requirements is missing, we will deny your submission.</p>
        </Accordion>
        <Accordion title="How To Make A Submission With Direct Media Upload">
          <p>This covers the process you see on the 'Submission' page, allowing you to upload media directly.</p>
        </Accordion>
        
        {/* MISC Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 border-l-4 border-green-500 pl-4">Miscellaneous</h2>
        <Accordion title="Frequently Asked Questions (FAQ)">
          <h4 className="text-lg font-semibold mt-2 mb-2">Can I upload a picture of a digital receipt?</h4>
          <p>At the moment, we only accept pictures of physical receipts.</p>
          <p>We are looking into adding support for digital receipts in the future, but that is something that is highly susceptible to botters/farmers and requires safe measures we have not yet been able to implement securely.</p>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">Can I use multiple wallets?</h4>
          <p>You may not, as that is considered farming activity and will result in your wallet address(es) being banned and signalled.</p>
        </Accordion>
      </div>
    </div>
  );
};

export default Docs; 