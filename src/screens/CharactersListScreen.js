import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { fetchCharacters } from "../services/api";
import SearchBar from "../components/SearchBar";

export default function CharactersListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCharacters();
  }, []);

  async function loadCharacters(query = "") {
    setLoading(true);
    const data = await fetchCharacters(query);
    setCharacters(data);
    setLoading(false);
  }

  function handleSearchButton() {
    loadCharacters(search);
  }

  function handleClearButton() {
    setSearch("");
    loadCharacters("");
  }

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSearch={handleSearchButton}
        onClear={handleClearButton}
      />

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("CharactersDetail", { id: item.id })
            }
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>
                {item.status} - {item.species}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1e2d",
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#132b3e",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginRight: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#97ce4c",
  },
  sub: {
    color: "#fff",
  },
});
