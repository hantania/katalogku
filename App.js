
import { useState } from 'react';
import {
  ScrollView,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HeaderBar from './src/components/HeaderBar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CustomInput from './src/components/CustomInput';

const FOTO = 'https://picsum.photos/300';

export default function App() {
  const [nama, setNama] = useState('');

  return (
    <SafeAreaProvider>
      <HeaderBar
        title="KatalogKu"
        subtitle="Uji coba komponen"
      />

      <ScrollView contentContainerStyle={styles.content}>
        <CustomInput
          label="Nama"
          placeholder="Tulis nama..."
          value={nama}
          onChangeText={setNama}
          error={nama === '' ? 'Nama wajib diisi' : null}
        />

        <Button
          title="Sapa"
          onPress={() => Alert.alert('Halo', nama)}
        />

        <View style={styles.gap} />

        <Button
          title="Reset"
          variant="outline"
          onPress={() => setNama('')}
        />

        <View style={styles.row}>
          <Card
            title="Produk A"
            price={10}
            image={FOTO}
          />

          <Card
            title="Produk B"
            price={25}
            image={FOTO}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  gap: {
    height: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: -6,
  },
});
