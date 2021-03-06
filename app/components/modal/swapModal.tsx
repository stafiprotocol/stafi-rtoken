import React from 'react';
import {Modal} from 'antd';
import Uniswap_svg from '@images/uniswap.png';

import './swap.scss';

type Props={
  visible:boolean,
  onOk?:Function,
  onCancel?:Function,
}
export default function Index(props:Props){
  return <Modal visible={props.visible} 
  className="stafi_swap_modal"
  closable={false}
  footer={<div>
    <a>
      Swap
    </a>
    <a>
      Uniswap
    </a>
  </div>}
  onOk={()=>{
    props.onOk && props.onOk();
  }} onCancel={()=>{
    props.onCancel && props.onCancel();
  }}>
        <div>
          <div className="title">
              <img src={Uniswap_svg} />
              <div>
                Uniswap
              </div>
          </div>
          <div className="context">
          Uniswap only support ERC20 token, would you like to swap token?
          </div>
        </div>
      </Modal>
}