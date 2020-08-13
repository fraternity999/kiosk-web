import React from 'react';
import {Descriptions} from "antd";

class UserInfo extends React.Component{

  render() {
    return(
      <div>
        <Descriptions bordered size='default'>
          <Descriptions.Item label={<div>姓名</div>}>{this.props.patientInfo.name}</Descriptions.Item>
          <Descriptions.Item label={<div>性别</div>}>{this.props.patientInfo.sex}</Descriptions.Item>
          <Descriptions.Item label={<div>余额</div>}>{this.props.patientInfo.amount}</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default UserInfo;
