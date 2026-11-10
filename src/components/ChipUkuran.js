import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

// <ChipUkuran label="S" selected onPress={...} />
export default function ChipUkuran({ label, selected = false, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected ? styles.selected : styles.notSelected]}>
      <Text style={[styles.text, { color: selected ? COLORS.card : COLORS.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minWidth: 47,              // W 47
    height: 30,                // H 30
    borderRadius: 20,          // radius 20
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  notSelected: { backgroundColor: COLORS.card, borderColor: COLORS.border },
  text: { fontSize: 14, lineHeight: 17, fontWeight: '400' },
});
