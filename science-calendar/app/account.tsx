import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import { router } from "expo-router";

const isSignedUp: boolean = true;

export default function Account() {
  if (!isSignedUp) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Hãy đăng nhập để có trải nghiệm tốt nhất
        </Text>
        <Button
          title="Đăng nhập"
          variant="contained"
          color="#fff"
          tintColor="#000"
          onPress={() => router.push("/login")}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#25292e",
    paddingTop: 100,
    gap: 50,
  },
  titleText: {
    fontSize: 36,
    color: "#fff",
    marginHorizontal: 20,
    textAlign: "center",
  },
});
