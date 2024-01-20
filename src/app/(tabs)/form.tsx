import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { styles } from '../Styles/formStyle';
import { stylesButton } from '../../globalStyle/buttonStyle';
import { Link } from 'expo-router';

export default function Form() {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [fone, setFone] = useState('');
  let [location, setLocation] = useState('');
  let [obs, setObs] = useState('');

  function handleCadastrado() {
    if (name === '' || email === '' || fone === '' || location === '') {
      alert('Preencha todos os campos.');
    } else {
      alert('Cadastrado com sucesso');
      setName(''),
      setEmail(''),
      setFone(''),
      setLocation(''),
      setObs('')
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#e5c03cb3" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#e5c03cb3" keyboardType='email-address' value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Fone" placeholderTextColor="#e5c03cb3" keyboardType='numeric' value={fone} onChangeText={setFone} />
        <TextInput style={styles.input} placeholder="Localização" placeholderTextColor="#e5c03cb3" value={location} onChangeText={setLocation} />
        <TextInput style={styles.input} placeholder="Observação" placeholderTextColor="#e5c03cb3" value={obs} onChangeText={setObs} />

        <Text style={{ marginTop: 20 }}>
          <Pressable onPress={handleCadastrado} style={stylesButton.button}>
            <Text style={stylesButton.text}>⚡ REGISTRAR</Text>
          </Pressable>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}