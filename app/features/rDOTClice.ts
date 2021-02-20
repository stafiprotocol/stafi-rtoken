import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store'; 
import PolkadotServer from '@servers/polkadot/index';
import {message} from 'antd';
import NumberUtil from '@util/numberUtil';   
import {setLocalStorageItem,getLocalStorageItem,Keys} from '@util/common'

const rDOTClice = createSlice({
  name: 'rDOTModule',
  initialState: {  
    dotAccounts:[], 
    dotAccount:getLocalStorageItem(Keys.DotAccountKey),    //选中的账号 
    validPools:[]
  },
  reducers: {  
    setDotAccounts(state,{payload}){
      const accounts=state.dotAccounts;
      const account=accounts.find((item:any)=>{
        return item.address==payload.address;
      })
      if(account){
        account.balance=payload.balance;
      }else{
        state.dotAccounts.push(payload)
      } 
    },  
    setDotAccount(state,{payload}){
      setLocalStorageItem(Keys.DotAccountKey,payload)
      state.dotAccount=payload;
    }, 
  },
});
const polkadotServer=new PolkadotServer();
export const { setDotAccounts,setDotAccount } = rDOTClice.actions;
 
 

export const createSubstrate = (account:any): AppThunk=>async (dispatch, getState)=>{ 
      queryBalance(account,dispatch)
}

const queryBalance=async (account:any,dispatch:any)=>{
  let account2:any= {...account}
  const api= await polkadotServer.createSubstrateApi();
  const result = await  api.query.system.account(account2.address); 
  if (result) {
    let fisFreeBalance = NumberUtil.fisAmountToHuman(result.data.free);
    account2.balance = NumberUtil.handleEthAmountRound(fisFreeBalance);
  } 
  dispatch(setDotAccounts(account2));
}

export default rDOTClice.reducer;