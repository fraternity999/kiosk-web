import React from 'react';
import {Descriptions} from "antd";

class UserInfo extends React.Component{

  render() {
    return(
      <div>
        <Descriptions bordered size='default'>
          <Descriptions.Item label={<div>姓名</div>}>Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label={<div>性别</div>}>女</Descriptions.Item>
          <Descriptions.Item label={<div>余额</div>}>100</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default UserInfo;
