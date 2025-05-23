type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    title: string;
    body: string;
    reactions: Reaction;
    views: number
}

type PostResponse = {
    posts: Post[]
}

type CommentUser = {
  id: number;
  username: string;
};

type Comment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: CommentUser;
};

type CommentsResponse = {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
};

type PostWithDetails = Post & {
  tags: string[];
};


export {PostResponse, Post, Reaction, CommentUser, Comment, CommentsResponse, PostWithDetails}