import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Svg, { Line } from "react-native-svg";
import { Button } from "@react-native-material/core";
import { Link, router } from "expo-router";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!user) {
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
        <Link href="/" style={{ position: "absolute", top: 50, left: 20 }}>
          <Icon name="close" size={24} color="#fff" />
        </Link>

        <Icon name="account-circle" size={150} color="#fff" />
        <Text style={styles.userNametext}>{user.email ?? "Tài khoản"}</Text>
        <View style={styles.featureContainer}>
          <Link href="/bookmark" style={{ flex: 1 }}>
            <View style={styles.featureSubContainer}>
              <Icon name="bookmark" size={24} color="#fff" />
              <Text style={styles.featureText}>Bài viết đã lưu</Text>
            </View>
          </Link>
          <Svg
            height={20}
            width={"100%"}
            style={{ position: "absolute", top: 45 }}
          >
            <Line
              x1="25"
              y1="5"
              x2="1000"
              y2="5"
              stroke="white"
              strokeWidth="2"
            />
          </Svg>
          <Link href="/edit" style={{ flex: 1 }}>
            <View style={styles.featureSubContainer}>
              <Icon name="pencil-outline" size={24} color="#fff" />
              <Text style={styles.featureText}>Chỉnh sửa thông tin</Text>
            </View>
          </Link>
        </View>
        <Button
          title="Đăng xuất"
          variant="contained"
          color="#3D3C3C"
          tintColor="#EB1414"
          onPress={handleLogout}
          style={{ position: "absolute", bottom: 200, width: "50%" }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 100,
            color: "#fff",
            opacity: 0.5,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Ver 1.0.0
        </Text>
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
    gap: 20,
  },
  titleText: {
    fontSize: 36,
    color: "#fff",
    marginHorizontal: 20,
  },
  userNametext: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 0,
  },
  featureContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "90%",
    height: 100,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "#3D3C3C",
  },
  featureSubContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 7,
  },
  featureText: {
    fontSize: 20,
    color: "#fff",
  },
});
