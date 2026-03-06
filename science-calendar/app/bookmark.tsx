import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bài viết đã lưu</Text>
      <View
        style={{
          height: 100,
          marginTop: 20,
          width: "100%",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Card mode="outlined" style={styles.cardContainer}>
          <View style={styles.row}>
            <Text style={styles.cardText}>
              Nguyên tử chỉ là các không gian trống
            </Text>
            <Icon name="trash-can-outline" size={24} color="#fff" />
          </View>
        </Card>
        <Card mode="outlined" style={styles.cardContainer}>
          <View style={styles.row}>
            <Text style={styles.cardText}>
              Nguyên tử chỉ là các không gian trống
            </Text>
            <Icon name="trash-can-outline" size={24} color="#fff" />
          </View>
        </Card>
        <Card mode="outlined" style={styles.cardContainer}>
          <View style={styles.row}>
            <Text style={styles.cardText}>
              Nguyên tử chỉ là các không gian trống
            </Text>
            <Icon name="trash-can-outline" size={24} color="#fff" />
          </View>
        </Card>
      </View>
      <Link href="/account" style={{ position: "absolute", bottom: 200 }}>
        <Button textColor="#fff">Quay lại</Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#25292e",
    paddingTop: 100,
  },
  titleText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    width: "90%",
    height: 100,
    backgroundColor: "#3D3C3C",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    flex: 1,
  },

  cardText: {
    marginRight: 8,
    fontSize: 20,
    color: "#fff",
    width: "70%",
  },
});
