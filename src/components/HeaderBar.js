import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';
import Icon from './Icon';
import RoundButton from './RoundButton';
import CustomInput from './CustomInput';

// Beranda   : <HeaderBar title="KatalogKu" accent />
// Profil    : <HeaderBar title="Profil" />
// Edit/Detail: <HeaderBar title="Detail Produk" onBack={...} right={<RoundButton .../>} />
// Search    : <HeaderBar search onBack={...} value={q} onChangeText={setQ} onClear={() => setQ('')} />
// Butuh <SafeAreaProvider> di App.js (useSafeAreaInsets).
export default function HeaderBar({
  title, subtitle, onBack, right, accent = false,
  search = false, value, onChangeText, onClear, placeholder = 'Cari produk...',
}) {
  const insets = useSafeAreaInsets();
  const frame = { paddingTop: insets.top, minHeight: 54 + insets.top };

  if (search) {
    return (
      <View style={[styles.bar, frame]}>
        {onBack ? (
          <Pressable onPress={onBack} style={styles.back}>
            <Icon name="arrow" size={24} color={COLORS.primary} />
          </Pressable>
        ) : null}
        <CustomInput
          icon="search"
          containerStyle={styles.searchInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onClear={onClear}
        />
      </View>
    );
  }

  const slots = onBack || right;
  return (
    <View style={[styles.bar, frame]}>
      {slots ? (
        <View style={styles.slot}>
          {onBack ? <RoundButton icon="arrow" onPress={onBack} /> : null}
        </View>
      ) : null}
      <View style={styles.center}>
        <Text style={[styles.title, accent && styles.accent]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
      </View>
      {slots ? <View style={[styles.slot, styles.slotRight]}>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, gap: 8,
  },
  slot: { width: 44, alignItems: 'flex-start' },
  slotRight: { alignItems: 'flex-end' },
  center: { flex: 1, alignItems: 'center' },
  title: { fontSize: 20, lineHeight: 28, fontWeight: '700', color: COLORS.muted, textAlign: 'center' },
  accent: { color: COLORS.primary },
  sub: { fontSize: 13, lineHeight: 20, color: COLORS.muted },
  back: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  searchInput: { flex: 1, marginBottom: 0 },
});
