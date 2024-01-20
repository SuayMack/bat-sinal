import React from 'react';
import { View, Text } from 'react-native';

import { stylesButton } from '../../globalStyle/buttonStyle';

export function ButtonActivateSignal() {
  
  return (    

      <View style={stylesButton .button}>
        <Text style={stylesButton .text}>ACTIVATE BAT SIGNAL</Text>
      </View>

  );
}