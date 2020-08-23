import React from 'react';
import {Descriptions} from "antd";
import styles from './userInfo.less';

class UserInfo extends React.Component{

  render() {
    return(
      <div>
        <Descriptions bordered size='small' column={2}>
          <Descriptions.Item label={<div className={styles.label}>姓名:</div>}>{this.props.patientInfo.name}</Descriptions.Item>
          <Descriptions.Item label={<div className={styles.label}>性别:</div>}>{this.props.patientInfo.sex}</Descriptions.Item>
          <Descriptions.Item label={<div className={styles.label}>余额:</div>}>{this.props.patientInfo.account}</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default UserInfo;
