import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Link, router } from "expo-router";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { db } from "../firebaseConfig";
import { collection, query, where, limit, getDocs } from "firebase/firestore";

type Fact = {
  id: string;
  title: string;
  content: string;
  categoryID: string;
};

const currentDate: Date = new Date();

const getTodayCategoryId = () => {
  const mod = currentDate.getDate() % 4;

  if (mod === 1) return "physics";
  if (mod === 2) return "chemistry";
  if (mod === 3) return "biology";
  return "math";
};

export default function Index() {
  const [fact, setFact] = useState<Fact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFact = async () => {
      try {
        const categoryID = getTodayCategoryId();
        const q = query(
          collection(db, "facts"),
          where("categoryID", "==", categoryID),
          limit(1),
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const docSnap = snapshot.docs[0];
          setFact({ id: docSnap.id, ...(docSnap.data() as any) });
        } else {
          setFact(null);
        }
      } catch (e) {
        console.error("Error loading fact", e);
        setFact(null);
      } finally {
        setLoading(false);
      }
    };
    loadFact();
  }, []);

  const handleOpenFact = () => {
    if (!fact) return;
    router.push({
      pathname: "/fact",
      params: {
        factId: fact.id,
        title: fact.title,
        content: fact.content,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Link
        href="/account"
        style={{ position: "absolute", top: 50, right: 20 }}
      >
        <Icon name="account-circle" size={30} color="#fff" />
      </Link>
      <Text style={styles.monthYearText}>
        Tháng {currentDate.getMonth() + 1} năm {currentDate.getFullYear()}
      </Text>
      <Text style={styles.dayText}>{currentDate.getDate()}</Text>

      {loading ? (
        <ActivityIndicator
          color="#fff"
          style={{ position: "absolute", bottom: 80 }}
        />
      ) : fact ? (
        <Text style={styles.factText} onPress={handleOpenFact}>
          {fact.title}
        </Text>
      ) : (
        <Text style={styles.factText}>Chưa có fact cho hôm nay</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  monthYearText: {
    fontSize: 24,
    color: "#fff",
  },
  dayText: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
  },
  factText: {
    fontSize: 18,
    color: "#fff",
    position: "absolute",
    bottom: 80,
  },
});
