import { StyleSheet, Text, View } from "react-native";
export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Account</Text>
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
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 20,
  },
});
