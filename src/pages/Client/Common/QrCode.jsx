import React from 'react';
import UserInfo from "@/pages/Client/Common/UserInfo";
import {Descriptions} from "antd";
import imgUrl from "../../../assets/images/qr.png"

class QrCode extends React.Component{

  render() {

    return(
      <div>
        <div>
          <UserInfo/>
        </div>
        <div>
          <Descriptions bordered size='default' column={1}>
            <Descriptions.Item label="订单号码">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="订单金额">女</Descriptions.Item>
          </Descriptions>
        </div>
        <div>
          <img alt='二维码' src={imgUrl}/>
        </div>
      </div>
    );
  }

}
export default QrCode;
