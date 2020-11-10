import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result}
        keyExtractor={(result) => {
          result.id;
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
