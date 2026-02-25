import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

export default function Fact() {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ position: "absolute", top: 50, left: 20 }}>
        <Icon name="close" size={24} color="#fff" />
      </Link>
      <Icon
        name="bookmark"
        size={24}
        color="#fff"
        style={{ position: "absolute", top: 50, right: 20 }}
      />
      <Text style={styles.titleText}>
        Nguyên tử chỉ là các không gian trống
      </Text>
      <Text style={styles.contentText}>
        Mặc dù nguyên tử được coi là khối xây dựng cơ bản của vật chất, nhưng
        chúng chủ yếu là không gian trống. Hạt nhân nguyên tử chiếm một phần rất
        nhỏ của thể tích nguyên tử, trong khi các electron quay quanh hạt nhân ở
        khoảng cách lớn hơn nhiều. Do đó, phần lớn thể tích của nguyên tử là
        không gian trống.
      </Text>
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
