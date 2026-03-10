import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert(
        "Thiếu thông tin",
        "Vui lòng nhập tên người dùng, email và mật khẩu.",
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        avatarURL: "",
        savedFacts: [],
      });

      // Đăng ký thành công
      Alert.alert("Thành công", "Tạo tài khoản thành công!");
      router.push("/account");
    } catch (error: any) {
      Alert.alert(
        "Lỗi đăng ký",
        error.message ?? "Đã xảy ra lỗi, vui lòng thử lại.",
      );
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/account" style={{ position: "absolute", top: 50, left: 20 }}>
        <Icon name="close" size={24} color="#fff" />
      </Link>
      <Text style={styles.titleText}>Đăng ký</Text>

      <View style={styles.field}>
        <Text style={styles.inputTitle}>Tên người dùng</Text>
        <TextInput
          style={styles.input}
          inputMode="text"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          inputMode="email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.inputTitle}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          inputMode="text"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        title="Đăng ký"
        variant="contained"
        color="#fff"
        tintColor="#000"
        style={{
          width: "50%",
          alignSelf: "center",
          position: "absolute",
          bottom: 120,
        }}
        onPress={signUp}
      />
      <Button
        title="Đã có tài khoản? Đăng nhập"
        variant="text"
        color="#fff"
        tintColor="#000"
        style={{
          width: "80%",
          alignSelf: "center",
          position: "absolute",
          bottom: 60,
        }}
        onPress={() => router.push("/login")}
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
