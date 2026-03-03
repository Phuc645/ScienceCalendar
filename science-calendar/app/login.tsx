import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Link href="/account" style={{ position: "absolute", top: 50, left: 20 }}>
        <Icon name="close" size={24} color="#fff" />
      </Link>
      <Text style={styles.titleText}>Đăng nhập</Text>

      <View style={styles.field}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput style={styles.input} inputMode="text" />
      </View>

      <View style={styles.field}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput style={styles.input} inputMode="text" />
      </View>
      <Button
        title="Đăng nhập"
        variant="contained"
        color="#fff"
        tintColor="#000"
        style={{
          width: "50%",
          alignSelf: "center",
          position: "absolute",
          bottom: 120,
        }}
      />
      <Button
        title="Chưa có tài khoản? Đăng ký"
        variant="text"
        color="#fff"
        tintColor="#000"
        style={{
          width: "80%",
          alignSelf: "center",
          position: "absolute",
          bottom: 60,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#25292e",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  field: {
    marginBottom: 20, // 👈 khoảng cách giữa Username và Password
  },
  inputTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "transparent",
  },
});
