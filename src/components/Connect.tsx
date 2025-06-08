import React from 'react';
import { WalletButton, useWallet } from '@vechain/vechain-kit';
import './Connect.css';

export const Connect = () => {
    return (
        <div className="top-bar">
            <WalletButton
                mobileVariant="iconDomainAndAssets"
                desktopVariant="iconDomainAndAssets"
            />
        </div>
    );
};
