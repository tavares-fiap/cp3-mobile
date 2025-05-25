import { NavigatorScreenParams } from "@react-navigation/native";
type Home = {
  History: undefined;
  Fiction: undefined;
};

type RootStack = {
  MainTabs: NavigatorScreenParams<Home>;
  PostDetails: { postId: number };
};

export { Home, RootStack };
