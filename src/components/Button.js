import { Pressable, Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// variant: 'primary' | 'outline' | 'danger'
// icon: nama ikon (opsional). Tanpa icon -> tidak dirender (sama dengan display: none di Figma)
// Lebar tidak diset di sini: ikut wadah induknya (atur di layar yang memakai).
export default function Button({
  title, onPress, variant = 'primary', disabled = false, icon,
}) {
  const outline = variant === 'outline';
  const textColor = outline ? COLORS.primary : COLORS.card;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        outline && styles.outline,
        variant === 'danger' && styles.danger,
        (pressed || disabled) && styles.dim,
      ]}>
      <View style={styles.row}>
        {icon ? <Icon name={icon} size={18} color={textColor} /> : null}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,            // H 48
    paddingHorizontal: 24,    // padding 0 24
    borderRadius: 30,         // radius 30
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: COLORS.primary },
  outline: { backgroundColor: COLORS.card, borderWidth: 1.5, borderColor: COLORS.primary },
  danger: { backgroundColor: COLORS.danger },
  dim: { opacity: 0.5 },      // Disabled = opacity 50%
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },  // gap 8
  text: { fontSize: 15, lineHeight: 20, fontWeight: '400' },    // Body 15 Regular
});
