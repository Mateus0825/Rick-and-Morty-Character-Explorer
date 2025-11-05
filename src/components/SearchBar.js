import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

export default function SearchBar({ value, onChangeText, onSearch, onClear }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar personagem..."
        placeholderTextColor="#7bbf32"
        value={value}
        onChangeText={onChangeText}
      />

      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonClear} onPress={onClear}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
    alignItems: "center",
    marginTop: 40,  
  },
  input: {
    flex: 1,
    backgroundColor: "#132b3e",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#97ce4c",
  },
  button: {
    backgroundColor: "#97ce4c",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0b1e2d",
  },
   buttonClear: {
    backgroundColor: "#ce4c4cff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});
