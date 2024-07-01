import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles, { getBtnStyle, getBtnTextStyle } from "./tabs.style";
import { SIZES } from "@/constants";

interface Props {
  tabs?: string[];
  activeTab: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  onHandleSearchType?: () => void;
}

function TabButton({ name, activeTab, onHandleSearchType }: Props) {
  return (
    <TouchableOpacity
      style={getBtnStyle(name!, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={getBtnTextStyle(name!, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab!(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
