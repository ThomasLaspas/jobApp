import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles, { getTabStyle, getTabTextStyle } from "./welcomestyle";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

interface WelcomeProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  handleClick: (item: any) => void;
}

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome: React.FC<WelcomeProps> = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Thomas</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleClick(searchTerm)}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={getTabStyle(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);

              }}
            >
              <Text style={getTabTextStyle(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
