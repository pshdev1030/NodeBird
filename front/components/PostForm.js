import { Button, Form, Input } from "antd";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_ACTION } from "../reducers/post";
useSelector;
const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  //   실제 돔에 접근해야할 때 사용
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(ADD_POST_ACTION);
    setText("");
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹쨱
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>;
        })}
      </div>
    </Form>
  );
};
// 반복문 안도 컴포넌트로
// input ㅏ일같은 경우 ref로 돔을 조작하여 호출

export default PostForm;
