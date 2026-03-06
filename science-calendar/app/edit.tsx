import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router } from "expo-router";
import { Button } from "@react-native-material/core";

export default function Edit() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Chỉnh sửa thông tin</Text>
      <Icon name="account-circle" size={150} color="#fff" />
      <TextInput style={styles.input} inputMode="text" defaultValue="Ph645" />
      <Button
        title="Lưu"
        variant="contained"
        color="#fff"
        tintColor="#000"
        style={{
          width: "30%",
          alignSelf: "center",
          position: "absolute",
          bottom: 120,
        }}
      />
      <Button
        title="Quay lại"
        variant="text"
        color="#fff"
        tintColor="#000"
        style={{
          width: "80%",
          alignSelf: "center",
          position: "absolute",
          bottom: 60,
        }}
        onPress={() => router.push("/account")}
      />
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
    gap: 20,
  },
  titleText: {
    fontSize: 36,
    color: "#fff",
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "transparent",
    borderWidth: 1,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#3D3C3C",
    height: 60,
  },
});

//
