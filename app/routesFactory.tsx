import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import authorizedRoute from '@components/route/authorizedRoute';
import {Symbol} from '@keyring/defaults'

import Home from './pages/template';
import RDOTHome from './pages/rDOT/home'
import RDOTWallet from './pages/rDOT/selectWallet';
import RDOTWalletFIS from './pages/rDOT/selectWallet_rFIS';
import RDOTStaker from './pages/rDOT/staker';
import RDOTValidator from './pages/rDOT/validator';
import RDOTStakerIndex from './pages/rDOT/staker/home';
import RDOTStakerInfo from './pages/rDOT/staker/info';
import RDOTStakerRedeem from './pages/rDOT/staker/redeem';
import RDOTSeach from './pages/rDOT/search';
import RDOTType from './pages/rDOT/selectType';

  
const routesFactory=(role?:any)=>{ 
  const routes=[
    {
      id:"root",
      path:'/',
      exact:true,
      render:()=>{
        return <Redirect to={"/rDOT/home"}/>
      }
    },
    {
      id:"home",
      path:"/rDOT",
      type:"rDOT",
      component: Home,
      routes:[{
        id:"RDOT_home",
        path:"/rDOT/home",
        component:RDOTHome
      },{
        id:"RDOT_wallet",
        path:"/rDOT/wallet",
        component:RDOTWallet
      },{
        id:"RDOT_wallet",
        path:"/rDOT/fiswallet",
        component:RDOTWalletFIS
      },{
        id:"RDOT_staker",
        type:"Staker",
        path:"/rDOT/staker",
        component:authorizedRoute(Symbol.Dot,"/rDOT/home")(RDOTStaker),
        routes:[
          {
            id:"RDOT_staker_index",
            path:"/rDOT/staker/index",
            component:RDOTStakerIndex
          },{
            id:"RDOT_staker_index_info",
            path:"/rDOT/staker/info",
            component:RDOTStakerInfo
          },,{
            id:"RDOT_staker_index_redeem",
            path:"/rDOT/staker/redeem",
            component:RDOTStakerRedeem
          },{
            path: '*',
            component: () => <Redirect to="/rDOT/staker/index"/>
          }
        ]
      },{
        id:"RDOT_validator",
        type:"Validator",
        path:"/rDOT/validator",
        component:authorizedRoute(Symbol.Dot,"/rDOT/home")(RDOTValidator)
      },{
        id:"RDOT_search",
        path:"/rDOT/search",
        component:authorizedRoute(Symbol.Dot,"/rDOT/home")(RDOTSeach)
      },{
        id:"RDOT_type",
        path:"/rDOT/type",
        component:authorizedRoute(Symbol.Dot,"/rDOT/home")(RDOTType)
      },{
        path: '*',
        component: () => <Redirect to="/rDOT/home"/>
      }]
    }
  ]

  return renderRoutes(routes);
}

export default routesFactory;