

import { ApiPromise, WsProvider } from '@polkadot/api';
import config from '@config/index';

var stafiApi = null;

export default {

    getWeb3EnalbeName: function () {
        return 'stafi/rtoken';
    },

    getPolkadotJsSource: function () {
        return 'polkadot-js';
    },

    createStafiApi: function () {
        const types = {
            RefCount: 'u32',
            ChainId: 'u8',
            ResourceId: '[u8; 32]',
            DepositNonce: 'u64',
            RateType: 'u64',
            AccountRData: {
                free: 'u128'
            },
            RSymbol: {
                _enum: [
                    'RFIS',
                    'RDOT',
                    'RKSM'
                ]
            },
            ProposalStatus: {
                _enum: [
                    'Active',
                    'Passed',
                    'Expired',
                    'Executed'
                ]
            },
            ProposalVotes: {
                voted: 'Vec<AccountId>',
                status: 'ProposalStatus',
                expiry: 'BlockNumber'
            },
            BondKey: {
                symbol: 'RSymbol',
                bond_id: 'H256'
            },
            BondRecord: {
                bonder: 'AccountId',
                symbol: 'RSymbol',
                pubkey: 'Vec<u8>',
                pool: 'Vec<u8>',
                blockhash: 'Vec<u8>',
                txhash: 'Vec<u8>',
                amount: 'u128'
            },
            BondReason: {
                _enum: [
                    'Pass',
                    'BlockhashUnmatch',
                    'TxhashUnmatch',
                    'PubkeyUnmatch',
                    'PoolUnmatch',
                    'AmountUnmatch'
                ]
            },
            SigVerifyResult: {
                _enum: [
                    'InvalidPubkey',
                    'Fail',
                    'Pass'
                ]
            },
            LinkChunk: {
                bond: 'u128',
                unbond: 'u128'
            },
            BondUnlockChunk: {
                value: 'u128',
                era: 'u32'
            },
            WithdrawChunk: {
                who: 'AccountId',
                pool: 'Vec<u8>',
                recipient: 'Vec<u8>',
                value: 'u128'
            },
            RproposalStatus: {
                _enum: [
                    'Initiated',
                    'Approved',
                    'Rejected',
                    'Expired'
                ]
            },
            RproposalVotes: {
                votes_for: 'Vec<AccountId>',
                votes_against: 'Vec<AccountId>',
                status: 'RproposalStatus',
                expiry: 'BlockNumber'
            }
        };
        if (stafiApi) {
            return stafiApi;
        }
 
        stafiApi = this.createSubstrateApi(config.stafiChain(), types); 
        return stafiApi;
    },
    
    createSubstrateApi: function (provider, types) {
        const wsProvider = new WsProvider(provider);
        return ApiPromise.create({
            provider: wsProvider,
            types
        });
   }

}
