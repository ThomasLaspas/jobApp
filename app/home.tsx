import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";


const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string>("");
    const btnImgStyle = {
        width: 40,
        height: 40,
        borderRadius: SIZES.small / 1.25
    };
    const btnImgStyle2 = {
        width: 50,
        height: 50,
        borderRadius: SIZES.small / 1.25
    };
    console.log(searchTerm)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <Image source={icons.menu} resizeMode="cover" style={btnImgStyle} />
                <Image source={images.profile} resizeMode="cover" style={btnImgStyle2} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <Popularjobs searchTerm={searchTerm} />
                    <Nearbyjobs searchTerm={searchTerm} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;