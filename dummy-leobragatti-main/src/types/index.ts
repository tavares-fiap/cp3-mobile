type Reaction = {
  likes: number;
  dislikes: number;
};

type Post = {
  id: number;
  title: string;
  body: string;
  reactions: Reaction;
  views: number;
};

type PostResponse = {
  posts: Post[];
};

type PostDetails = {
  id: number;
  title: string;
  body: string;
  reactions: Reaction;
  views: number;
  tags: string[];
};

type CommentUser = {
  id: number;
  username: string;
};

type PostComment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: CommentUser;
};

type CommentsResponse = {
  comments: PostComment[];
  total: number;
  skip: number;
  limit: number;
};

export {
  PostResponse,
  Post,
  Reaction,
  CommentUser,
  PostComment,
  CommentsResponse,
  PostDetails,
};
