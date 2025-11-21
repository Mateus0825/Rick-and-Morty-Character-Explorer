import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CharacterCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#132b3e",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2cf5b5",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#97ce4c",
  },
  sub: {
    color: "#e5ffe0",
  },
});
