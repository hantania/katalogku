import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

export default function CategoryCard({ label, icon, active = false, onPress }) {
  const warna = active ? COLORS.card : COLORS.accent;
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, active ? styles.aktif : styles.tidakAktif]}>
      <Icon name={icon} size={24} color={warna} />
      <Text style={[styles.label, { color: warna }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 74,              // W 74
    height: 88,                
    paddingHorizontal: 16,    
    paddingVertical: 8,
    gap: 8,                   
    borderRadius: 10,          
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aktif: { backgroundColor: COLORS.primary, borderColor: COLORS.border },
  tidakAktif: { backgroundColor: COLORS.card, borderColor: COLORS.accent },
  label: { fontSize: 15, lineHeight: 20, fontWeight: '400', textAlign: 'center' },
});
