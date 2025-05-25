import { Post } from "@/types";
import {
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "@/types/navigation";

type ListItemProps = {
  post: Post;
};

type PostNavigationProp = NativeStackNavigationProp<RootStack, "MainTabs">;

const ListItem = ({ post }: ListItemProps) => {
  const navigation = useNavigation<PostNavigationProp>();
  const handlePress = () => {
    navigation.navigate("PostDetails", { postId: post.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.reactions}>
          <FontAwesomeIcon icon={faHeart} color="red" />
          <Text>{post.reactions.likes}</Text>
          <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
          <Text>{post.reactions.dislikes}</Text>
          <FontAwesomeIcon icon={faEye} />
          <Text>{post.views}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 4,
  },
  title: {
    fontSize: 16,
    color: "#1f1f1f",
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  touchable: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default ListItem;
