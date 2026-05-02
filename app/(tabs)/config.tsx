import TopBar from "@/components/TopBar";
import { StyleSheet, View } from "react-native";

export default function ScreenConfig() {
    return (
        <View style={styles.screen}>
            <TopBar title="Configurações" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#000819',
    },
});