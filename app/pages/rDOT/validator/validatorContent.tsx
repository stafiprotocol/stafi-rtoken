import React from 'react';
import Button from '@components/button/button';
import LeftContent from '@components/content/leftContent';
import './index.scss'; 

type Props={
    onRecovery:Function
}
export default function Index(props:Props){
    return <LeftContent className="stafi_rDOT_validator_context">
        <label className="title">Register as a OV on Polkadot</label>
        <div className="describe">
        OV(Original Validator) is a block producer of Polkadot chain which can receive delegated DOT on chaiin and get incentive reward from joining consensus.
        </div>
        <div className="sub_title">
            Prerequisites
        </div>
        <div className="describe">
        1. You have registered as a validator on Polkadot Chain <br/>
        2. You meet the current criteria for screening OV<br/>
        3. You know the penalty and risk of being a OV <br/>
        4. You know the nominate rules of a OV
        </div>
        <div className="sub_title">
            Apply
        </div>
        <div className="describe">
        In the start-up phase, in order to maximize revenue, StaFi chain will automatically nominate the elected validators on Polkadot. As the number of rDOT increases, validator will be open to the community
        </div>
        <div className="btns">
            <Button disabled={true}>Apply</Button>
        </div>
    </LeftContent>
}