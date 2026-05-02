
import { StyleSheet, Text, View } from "react-native";

type TopBarProps = {
    title: string;
}

export default function TopBar({ title }: TopBarProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 30,
        backgroundColor: '#031A4A',
        borderRadius: 100,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
    },
});