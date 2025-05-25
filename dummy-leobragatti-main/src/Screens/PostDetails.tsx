import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { CommentsResponse, PostDetails, PostComment } from "@/types";
import { RootStack } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCommentAlt,
  faTags,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

type PostDetailsRoute = RouteProp<RootStack, "PostDetails">;

const PostDetail = () => {
  const route = useRoute<PostDetailsRoute>();
  const { postId } = route.params;

  const [post, setPost] = useState<PostDetails | null>(null);
  const [comments, setComments] = useState<PostComment[]>([]);

  const fetchPosts = async () => {
    const { data } = await dummyApi.get<PostDetails>(`/posts/${postId}`);
    setPost(data);
  };

  const fetchComments = async () => {
    const { data } = await dummyApi.get<CommentsResponse>(
      `/comments/post/${postId}`
    );
    setComments(data.comments);
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, [postId]);

  const renderCommentItem = ({ item }: { item: PostComment }) => (
    <View style={styles.commentItem}>
      <View style={styles.commentHeader}>
        <FontAwesomeIcon icon={faUser} size={16} color="#555" />
        <Text style={styles.commentUser}>{item.user.username}</Text>
      </View>
      <Text style={styles.commentBody}>{item.body}</Text>
      <View style={styles.commentLikes}>
        <FontAwesomeIcon icon={faThumbsUp} size={14} color="#007bff" />
        <Text style={styles.likesText}>{item.likes}</Text>
      </View>
    </View>
  );

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text>Carregando post...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>

      <View style={styles.tagsContainer}>
        <FontAwesomeIcon icon={faTags} size={16} color="#6c757d" />
        {post.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>

      <Text style={styles.body}>{post.body}</Text>

      <View style={styles.separator} />

      <View style={styles.commentsSection}>
        <FontAwesomeIcon icon={faCommentAlt} size={18} color="#333" />
        <Text style={styles.commentsTitle}>
          Comentários ({comments.length})
        </Text>
      </View>

      {comments.length > 0 ? (
        <FlatList
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      ) : (
        <Text style={styles.noCommentsText}>Nenhum comentário ainda.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#343a40",
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#e9ecef",
    color: "#495057",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#212529",
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#dee2e6",
    marginVertical: 20,
  },
  commentsSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#343a40",
  },
  commentItem: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  commentUser: {
    fontWeight: "bold",
    marginLeft: 6,
    color: "#007bff",
  },
  commentBody: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 6,
  },
  commentLikes: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#28a745",
  },
  noCommentsText: {
    fontStyle: "italic",
    color: "#6c757d",
    textAlign: "center",
    marginTop: 10,
  },
});

export default PostDetail;
