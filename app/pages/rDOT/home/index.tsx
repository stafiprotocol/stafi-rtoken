import React, { useEffect } from 'react';
import {useDispatch,useSelector,DefaultRootState} from 'react-redux'
import HomeCard from '@components/card/homeCard';
import rDOT_svg from '@images/rDOT.svg'
import {connectPolkadotjs} from '@features/rDOTClice'
import './index.scss';

export default function Inde(props:any){
  const dispatch = useDispatch();  
    return <HomeCard 
        title={<><label>Liquefy</label> Your Staking DOT</>}
        subTitle={"Staking via StaFi Staking Contract and get rDOT in return"}
        btnText="Connect to Polkadotjs extension"
        btnIcon={rDOT_svg}
        onBtnClick={()=>{
          dispatch(connectPolkadotjs(()=>{
            props.history.push("/rDOT/wallet")
          })); 
        }}
        onIntroClick={()=>{

        }}
    />
}