import React from 'react';
import {useSelector} from 'react-redux';
import logo from '@images/header_logo.png';
import notice from '@images/notice.png';
import StringUtil from '@util/stringUtil'
import Popover from './popover';
import './index.scss';

type Props={
    route:any
}
export default function Index(props:any){
    const account=useSelector((state:any)=>{
        console.log(state,"======statestate")
        if(props.route.type=="rDOT"){
            if(state.rDOTModule.dotAccount && state.FISModule.fisAccount){
                return {
                    dotAccount:state.rDOTModule.dotAccount,
                    fisAccount:state.FISModule.fisAccount,
                }
            } 
        }
        return null
    })

    return <div className="stafi_header">
        <img className="header_logo" src={logo} />
        {account==null && <div className="header_tool">
            Connect to Polkadotjs
        </div>}
        {account && <div className="header_tools">
            <div className="header_tool notice new">
                
                <Popover>
                <img src={notice} />
                </Popover>
            </div> 
            {account.dotAccount && <div className="header_tool account dot">
                <div>{account.dotAccount.balance} DOT</div>
                <div>{StringUtil.replacePkh(account.dotAccount.address,6,44)}</div>
            </div>} 
           {account.fisAccount && <div className="header_tool account">
                <div>{account.fisAccount.balance} FIS</div>
                <div>{StringUtil.replacePkh(account.fisAccount.address,6,44)}</div>
            </div>} 
        </div>}
    </div>
}