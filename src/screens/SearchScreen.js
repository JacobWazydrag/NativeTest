import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants("");

  const filterRestaurantsByPrice = (price) => {
    //price === '$' or '$$', or '$$$'
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length}</Text>
      <ScrollView>
        <ResultsList
          result={filterRestaurantsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          result={filterRestaurantsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          result={filterRestaurantsByPrice("$$$")}
          title="No Way Jose, Mucho Dinero"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
