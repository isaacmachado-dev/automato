import TopBar from '@/components/TopBar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function IndexScreen() {
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
          style={[
            styles.image,
          ]}
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
          <View style={styles.side}>
            <Ionicons name="sparkles" size={20} color="black" />
          </View>

          {/* Teclado */}
          <View style={styles.placeholderCenter}>
            <TextInput
              style={[
                styles.placeholderText,
                keyboardVisible && styles.placeholderTextExpanded,
              ]}
              placeholder="Digite aqui"
              placeholderTextColor="#000000"
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

  imageKeyboardOpen: {
    width: 120,
    height: 120,
    borderRadius: 60,
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

  side: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3FFF3',
    borderRadius: 10,
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