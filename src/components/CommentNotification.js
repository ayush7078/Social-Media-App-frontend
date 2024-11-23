import { notification } from 'antd';

const CommentNotification = ({ commentData }) => {
  notification.info({
    message: `New comment on your post`,
    description: `${commentData.username} commented: ${commentData.text} on post ${commentData.postText} `,
    placement: 'topRight',
  });

  return null;
};

export default CommentNotification;
