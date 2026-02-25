import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const currentDate: Date = new Date();

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.monthYearText}>
          Tháng {currentDate.getMonth() + 1} năm {currentDate.getFullYear()}
        </Text>
        <Text style={styles.dayText}>{currentDate.getDate()}</Text>
        <Link href="/fact" style={styles.factText}>
          <Text>Nguyên tử chỉ là các không gian trống</Text>
        </Link>
      </View>
    </>
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
