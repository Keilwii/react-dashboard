import React from 'react';
import { WalletButton, useWallet } from '@vechain/vechain-kit';

export const Connect = () => {
    return (
        <WalletButton
            mobileVariant="iconDomainAndAssets"
            desktopVariant="iconDomainAndAssets"
        />
    );
};
