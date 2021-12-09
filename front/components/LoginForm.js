import { Form, Input, Button } from "antd";
import { useCallback, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");

  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log("hi");
    setIsLoggedIn(true);
  }, []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
