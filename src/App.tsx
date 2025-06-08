import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VeChainKitProvider, useWallet } from '@vechain/vechain-kit';
import Menu from './components/Menu';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Submission from './pages/Submission';
import Profile from './pages/Profile';
import Rewards from './pages/Rewards';
import { Connect } from './components/Connect';

const AppContent = () => {
    const { account, connection } = useWallet();
    const [loginAttemptedForSession, setLoginAttemptedForSession] = useState(false);

    useEffect(() => {
        const loginWithCertificate = async (certificate: string) => {
            try {
                const response = await fetch('https://demoefekti.verecycle.vet/api/login/wallet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Assuming API expects JSON with the certificate
                    },
                    body: JSON.stringify({certificate}),
                    credentials: 'include'
                });

                if (!response.ok) {
                    const errorBody = await response.text(); // Or response.json() if error is JSON
                    throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
                }

                const data = await response.json(); // Assuming API returns JSON on success
                console.log('Login successful:', data);
                // TODO: Handle successful login (e.g., store session token, update user context)

            } catch (error) {
                console.error('Login API call failed:', error);
                // Optionally, reset loginAttemptedForSession here if retries are desired under certain conditions
                // setLoginAttemptedForSession(false);
            }
        };

        if (connection.isConnected && account && connection.source?.type === 'wallet' && !loginAttemptedForSession) {
            console.log('DappKit wallet connected, attempting login...');
            setLoginAttemptedForSession(true); // Mark that we are attempting for this session

            const certificate = localStorage.getItem('dappkit@vechain/connectionCertificate');

            if (certificate) {
                console.log('Found connection certificate in localStorage.');
                loginWithCertificate(JSON.parse(certificate));
            } else {
                console.warn('DappKit connection certificate not found in localStorage. Cannot attempt login.');
                // Potentially setLoginAttemptedForSession back to false if the cert might appear later for the same connection (unlikely)
            }
        } else if (!connection.isConnected && loginAttemptedForSession) {
            // Reset when disconnected so login can be attempted on next connection
            console.log('Wallet disconnected, resetting login attempt flag.');
            setLoginAttemptedForSession(false);
        }
    }, [account, connection, loginAttemptedForSession]);

    return (
        <div className="body">
            <Connect />
            <main className="container mx-auto px-4 py-8 flex-grow pb-28">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/submission" element={<Submission />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rewards" element={<Rewards />} />
                </Routes>
            </main>
            <Menu />
        </div>
    );
};

const App = () => {
    return (
        <VeChainKitProvider
            dappKit={{
                allowedWallets: ['veworld', 'wallet-connect', 'sync2'],
                walletConnectOptions: {
                    projectId: process.env.WALLET_CONNECT_PROJECT_ID ?? '',
                    metadata: {
                        name: 'VeChain Kit Example',
                        description: 'Example application using VeChain Kit with Parcel',
                        url: window.location.origin,
                        icons: [`${window.location.origin}/logo.png`],
                    },
                },
            }}
            feeDelegation={{
                delegatorUrl: process.env.DELEGATOR_URL ?? '',
                delegateAllTransactions: false
            }}
            loginModalUI={{
                description: 'Connect your wallet to interact with the VeChain network.',
            }}
            loginMethods={[
                { method: 'dappkit', gridColumn: 4 } // VeChain wallets, always available
            ]}
            darkMode={true}
            network={{
                type: 'test' // Using testnet for development
            }}   
        >
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </VeChainKitProvider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />); 