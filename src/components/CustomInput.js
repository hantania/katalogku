import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// icon: ikon di kiri (mis. icon="search")
// onClear: jika diisi dan input tidak kosong -> tombol "x" muncul di kanan
// error: teks pesan -> border merah + teks merah di bawah
// ...rest: placeholder, value, onChangeText, secureTextEntry, dll -> diteruskan ke TextInput
export default function CustomInput({ label, error, icon, onClear, containerStyle, ...rest }) {
  const showClear = onClear && rest.value;
  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.field, showClear && styles.fieldClear, error && styles.fieldError]}>
        {icon ? <Icon name={icon} size={20} color={COLORS.muted} /> : null}
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.muted}
          {...rest}
        />
        {showClear ? (
          <Pressable onPress={onClear} style={styles.clear} hitSlop={6}>
            <Icon name="close" size={24} color={COLORS.primary} />
          </Pressable>
        ) : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { marginBottom: 6, fontWeight: '600', color: COLORS.text },
  field: {
    height: 48, flexDirection: 'row', alignItems: 'center',
    paddingLeft: 12, paddingRight: 12, gap: 8,
    backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 12,
  },
  fieldClear: { paddingRight: 4 },
  fieldError: { borderColor: COLORS.danger },
  input: { flex: 1, paddingVertical: 0, fontSize: 15, lineHeight: 20, color: COLORS.text },
  clear: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  error: { marginTop: 4, color: COLORS.danger, fontSize: 12 },
});
