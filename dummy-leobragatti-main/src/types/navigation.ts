import { NavigatorScreenParams } from "@react-navigation/native";
type Home = {
  History: undefined;
  Fiction: undefined;
};

type RootStackParamList = {
  MainTabs: NavigatorScreenParams<Home>;
  PostDetail: { postId: number };
};

export { Home , RootStackParamList};
