import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, useLocalSearchParams } from "expo-router";

export default function Fact() {
  const { title, content } = useLocalSearchParams<{
    title: string;
    content: string;
  }>();
  return (
    <View style={styles.container}>
      <Link href="/" style={{ position: "absolute", top: 50, left: 20 }}>
        <Icon name="close" size={24} color="#fff" />
      </Link>
      <Icon
        name="bookmark-outline"
        size={24}
        color="#fff"
        style={{ position: "absolute", top: 50, right: 20 }}
      />
      <Text style={styles.titleText}>{title ?? "Lỗi tiêu đề"}</Text>
      <Text style={styles.contentText}>{content ?? "Lỗi nội dung"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#25292e",
    gap: 20,
    width: "100%",
    height: "100%",
    paddingTop: 100,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    color: "#fff",
    marginHorizontal: 20,
  },
});
