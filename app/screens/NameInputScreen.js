
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NameInputScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름을 입력하세요:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Button title="시작하기" onPress={() => navigation.navigate('RouteSelect', { name })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 16, marginBottom: 20 }
});
