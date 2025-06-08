import { useWallet } from '@vechain/vechain-kit';

const Profile = () => {
  const { account, connection } = useWallet();
  const { isLoading, isConnected, source } = connection;

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Profile
      </h1>
      
      <div className="bg-gray-800 shadow-md rounded-lg p-6">
        {isLoading ? (
          <p className="text-gray-400 text-center">Connecting to wallet...</p>
        ) : isConnected && source?.type === 'wallet' && account ? (
          <div>
            <p className="text-gray-400 mb-2">Connected Wallet Address (DappKit):</p>
            <p 
              className="text-lg font-mono bg-gray-700 p-3 rounded break-all shadow-sm"
              title={account.address} // Show full address on hover if it's too long
            >
              {account.address}
            </p>
          </div>
        ) : isConnected && account ? (
          <div>
            <p className="text-gray-400 mb-2">Connected Account:</p>
            <p 
              className="text-lg font-mono bg-gray-700 p-3 rounded break-all shadow-sm"
              title={account.address}
            >
              {account.address}
            </p>
            {source?.type !== 'wallet' && (
              <p className="text-sm text-gray-500 mt-2">
                (Connected via: {source?.displayName || 'Unknown'})
              </p>
            )}
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            No wallet connected. Please connect your wallet using the button in the top bar.
          </p>
        )}
      </div>

      <p className="text-gray-500 text-center mt-8">
        This is the profile page content area.
      </p>
    </div>
  );
};

export default Profile; 