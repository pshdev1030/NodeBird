import { Button, Card, Popover, List, Comment } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import Avatar from "antd/lib/avatar/avatar";
import { useState, useCallback } from "react";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id);
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages Images={post.Images}></PostImages>}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ) : (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id && (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                )}
                :<Button>신고</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
          title={post.user.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
        </div>
      )}
      <List
        header={`${post.Comments.length} 개의 댓글`}
        itemLayout="horizontal"
        dataSource={post.Comments}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.nickname}
              avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
              content={item.content}
            ></Comment>
          </li>
        )}
      />
      {/* <Comments /> */}
    </div>
  );
};
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;

//기획 먼저하고 하나씩 구현하기
// type primary danger 색
