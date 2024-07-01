import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
const Popularjobs = ({ searchTerm }: { searchTerm: string }) => {
  const router = useRouter();
  const query = searchTerm === '' ? 'any' : searchTerm;
  useEffect(() => {
    fetchData()
  }, [searchTerm])
  const { isLoading, error, data, refetch: fetchData } = useFetch("search", {
    query: `${query}`,
    num_pages: 1,
    page: 1,
  });
  console.log(query)
  const [selectedJob, setSelectedJob] = useState<string>('');

  const handleCardPress = (item: any) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
