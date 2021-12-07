import React from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title="asdf" avatar={<Avatar>a</Avatar>} />
      <Button>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
