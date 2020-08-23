import React from 'react';
import UserInfo from "@/pages/Client/Common/UserInfo";
import {Descriptions} from "antd";
import imgUrl from "../../../assets/images/qr.png"
import QRCode  from 'qrcode.react';
class QrCode extends React.Component{

  state={
    qrUrl:"2131"
  }

  render() {

    return(
      <div>
        <div>
          <UserInfo patientInfo={this.props.patientInfo}/>
        </div>
        <div>
          <Descriptions bordered size='default' column={1}>
            <Descriptions.Item label="订单号码">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="订单金额">女</Descriptions.Item>
          </Descriptions>
        </div>
        <div>
          <QRCode
            value={this.state.qrUrl}
            size={200}
            fgColor="#000000"
          />
        </div>
      </div>
    );
  }

}
export default QrCode;
