import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// <Stepper value={qty} onChange={setQty} min={0} />
// Tombol minus redup saat value sudah mencapai min (varian "Minimum" di Figma).
export default function Stepper({ value = 0, onChange, min = 0, max = 99 }) {
  const atMin = value <= min;
  const atMax = value >= max;
  return (
    <View style={styles.box}>
      <Pressable
        disabled={atMin}
        onPress={() => onChange && onChange(value - 1)}
        style={styles.btn}>
        <Icon name="minus" size={16} color={atMin ? COLORS.muted : COLORS.primary} />
      </Pressable>
      <View style={styles.count}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Pressable
        disabled={atMax}
        onPress={() => onChange && onChange(value + 1)}
        style={styles.btn}>
        <Icon name="plus" size={16} color={atMax ? COLORS.muted : COLORS.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 32, minWidth: 84, padding: 4, gap: 2,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 5,
  },
  btn: {
    width: 24, height: 24, borderRadius: 4,
    borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.card,
    alignItems: 'center', justifyContent: 'center',
  },
  count: { minWidth: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 14, lineHeight: 17, fontWeight: '400', color: COLORS.text },
});
