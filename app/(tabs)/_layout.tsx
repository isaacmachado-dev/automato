import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Keyboard, Pressable, StyleSheet, View } from 'react-native';

function CustomTabBar({ state, descriptors, navigation }: any) {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });

        const hideSub = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    if (keyboardVisible) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const iconName =
                    route.name === 'index'
                        ? isFocused
                            ? 'home'
                            : 'home-outline'
                        : isFocused
                            ? 'settings'
                            : 'settings-outline';

                return (
                    <Pressable
                        key={route.key}
                        onPress={onPress}
                        style={styles.tabButton}
                        android_ripple={{ color: 'transparent' }}
                    >
                        <View
                            style={[
                                styles.innerButton,
                                isFocused && styles.innerButtonActive,
                            ]}
                        >
                            <Ionicons name={iconName} size={24} color="#ffffff" />
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

export default function LayoutTabs() {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#031A4A',
        marginBottom: 20,
        marginTop: 10,
        width: 300,
        maxWidth: 400,
        alignSelf: 'center',
        borderRadius: 100,
        height: 80,
        paddingVertical: 8,
        paddingHorizontal: 10,
        overflow: 'hidden',
    },

    tabButton: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 6,
        borderRadius: 100,
        overflow: 'hidden',
    },

    innerButton: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
        backgroundColor: 'transparent',
        paddingHorizontal: 8,
    },

    innerButtonActive: {
        backgroundColor: '#021438',
    },
});