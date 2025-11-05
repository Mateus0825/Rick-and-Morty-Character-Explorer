import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { fetchCharacterById } from "../services/api";
import { Ionicons } from "@expo/vector-icons";

export default function CharacterDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await fetchCharacterById(id);
    setCharacter(data);
    setLoading(false);
  }

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#97ce4c" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color="#97ce4c" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingTop: 10, paddingBottom: 40 }}>
        <Image source={{ uri: character.image }} style={styles.image} />

        <Text style={styles.name}>{character.name}</Text>

        <View style={styles.infoBox}>
          <Info label="Status" value={character.status} />
          <Info label="Espécie" value={character.species} />
          <Info label="Gênero" value={character.gender} />
          <Info label="Origem" value={character.origin?.name} />
          <Info label="Localização" value={character.location?.name} />
        </View>
      </ScrollView>
    </View>
  );
}

function Info({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value ?? "—"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1e2d",
    paddingHorizontal: 20,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1e2d",
  },

  loadingText: {
    color: "#97ce4c",
    marginTop: 10,
    fontSize: 16,
  },

  /** ← botão voltar */
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backText: {
    color: "#97ce4c",
    fontSize: 18,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 320,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#2cf5b5",
    backgroundColor: "#132a3e",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#97ce4c",
    textAlign: "center",
    marginBottom: 25,
    textShadowColor: "#2cf5b5",
    textShadowRadius: 6,
  },

  infoBox: {
    backgroundColor: "#132a3e",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2cf5b5",
    gap: 14,
  },

  row: {
    marginBottom: 6,
  },

  label: {
    fontSize: 14,
    color: "#7dbb48",
    fontWeight: "bold",
    marginBottom: 3,
  },

  value: {
    fontSize: 16,
    color: "#e4ffcc",
  },
});
