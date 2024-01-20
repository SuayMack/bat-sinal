import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { Link } from 'expo-router';

import { styles } from '../Styles/indexStyle';
import batLogo from '../../../assets/bat-logo.png';
import batFundo from '../../../assets/fundo.png';
import { ButtonActivateSignal } from '../../components/ButtonActivate';

export default function Home() {

  return (
    <View style={styles.container}>
      <ImageBackground source={batFundo} resizeMode="cover" style={styles.imageBackground}>
        <Image source={batLogo} style={styles.logo} />  
        <Link href="/form">    
          <ButtonActivateSignal/>
        </Link>
      </ImageBackground>
    </View>
  );
}