import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CharacterCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
