import TopBar from '@/components/TopBar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function IndexScreen() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      setTooltipVisible(false);
    });

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TopBar title="Automato" />

      <View
        style={[
          styles.content,
          keyboardVisible && styles.contentKeyboardOpen,
        ]}
      >
        <Image
          source={require('../../assets/brand/automato_wireframe-whiee_bg-not.png')}
          style={styles.image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        <Text style={styles.text}>Olá, Isaac.</Text>
      </View>

      <View
        style={[
          styles.contentInput,
          keyboardVisible && styles.contentInputExpanded,
        ]}
      >
        <View style={styles.placeholderRow}>
          <View style={styles.sideWrapper}>
            {tooltipVisible && !keyboardVisible && (
              <View style={styles.tooltip}>
                <View style={styles.tooltipContent}>
                  <Pressable style={styles.tooltipItem}>
                    <Text style={styles.tooltipText}>Windows 11</Text>
                  </Pressable>

                  <Pressable style={styles.tooltipItem}>
                    <Text style={styles.tooltipText}>Linux</Text>
                  </Pressable>

                  <Pressable style={styles.tooltipItem}>
                    <Text style={styles.tooltipText}>Comando rápido</Text>
                  </Pressable>
                </View>

                <View style={styles.tooltipArrow} />
              </View>
            )}

            <Pressable style={styles.side} onPress={toggleTooltip}>
              <Ionicons name="sparkles" size={20} color="black" />
            </Pressable>
          </View>

          <View style={styles.placeholderCenter}>
            <TextInput
              style={[
                styles.placeholderText,
                keyboardVisible && styles.placeholderTextExpanded,
              ]}
              placeholder="Digite aqui"
              placeholderTextColor="#000000"
              onFocus={() => setTooltipVisible(false)}
            />
          </View>

          <View style={styles.side}>
            <FontAwesome5 name="microphone" size={20} color="black" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000819',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  contentKeyboardOpen: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  contentInput: {
    marginHorizontal: 30,
    marginBottom: 20,
    backgroundColor: '#AFBBF2',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },

  contentInputExpanded: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },

  placeholderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sideWrapper: {
    position: 'relative',
    width: 44,
    height: 44,
    marginRight: 12,
  },

  side: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3FFF3',
    borderRadius: 10,
  },

  tooltip: {
    position: 'absolute',
    bottom: 54,
    left: -8,
    width: 170,
    alignItems: 'flex-start',
    zIndex: 50,
  },

  tooltipContent: {
    width: '100%',
    backgroundColor: '#102348',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  tooltipItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  tooltipText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  tooltipArrow: {
    marginLeft: 18,
    width: 12,
    height: 12,
    backgroundColor: '#102348',
    transform: [{ rotate: '45deg' }],
    marginTop: -6,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  placeholderCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  placeholderText: {
    width: '100%',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },

  placeholderTextExpanded: {
    textAlign: 'left',
  },
});