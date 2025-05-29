// app/index.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = React.useState('');
  const [route, setRoute] = React.useState('');
  const [distance, setDistance] = React.useState('');

  const handleSubmit = () => {
    console.log('🚚 배송 시작!');
    console.log(`이름: ${name}`);
    console.log(`배송 루트: ${route}`);
    console.log(`주행 거리: ${distance} km`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>약국 배송 앱</Text>

      <TextInput
        style={styles.input}
        placeholder="이름을 입력하세요"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="배송할 요양원 이름을 입력하세요"
        value={route}
        onChangeText={setRoute}
      />

      <TextInput
        style={styles.input}
        placeholder="금일 주행거리 (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <Button title="배송 기록 남기기" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
});