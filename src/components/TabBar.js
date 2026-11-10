import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// Urutan & ikon sesuai Figma: Beranda, Favorit, Keranjang, Profil
const TABS = [
  { key: 'Beranda',   icon: 'home' },
  { key: 'Favorit',   icon: 'heart' },
  { key: 'Keranjang', icon: 'cart' },
  { key: 'Profil',    icon: 'profile' },
];

// Cara 1 (mandiri):  <TabBar active="Beranda" onChange={(key) => ...} />
// Cara 2 (React Navigation): <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
//   -> nama Screen harus persis: Beranda, Favorit, Keranjang, Profil
// badges (opsional): { Favorit: 3 } -> angka kecil di ikon (latihan M6)
export default function TabBar({ active, onChange, state, navigation, badges = {} }) {
  const insets = useSafeAreaInsets();
  const current = state ? state.routes[state.index].name : active;
  const press = (key) => (state ? navigation.navigate(key) : onChange && onChange(key));

  return (
    <View style={[styles.bar, { height: 72 + insets.bottom, paddingBottom: insets.bottom }]}>
      {TABS.map((t) => {
        const on = current === t.key;
        const warna = on ? COLORS.primary : COLORS.muted;
        return (
          <Pressable key={t.key} style={styles.tab} onPress={() => press(t.key)}>
            <View style={[styles.indicator, on && styles.indicatorOn]}>
              <Icon name={t.icon} size={22} color={warna} />
              {badges[t.key] ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badges[t.key]}</Text>
                </View>
              ) : null}
            </View>
            <Text style={[styles.label, { color: warna }]}>{t.key}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.card,
    borderTopWidth: 1, borderTopColor: COLORS.border,
  },
  tab: { width: 72, height: 72, alignItems: 'center', justifyContent: 'center', gap: 3 },
  indicator: { width: 52, height: 30, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  indicatorOn: { backgroundColor: COLORS.primarysoft },
  label: { fontSize: 13, lineHeight: 20, fontWeight: '400' },
  badge: {
    position: 'absolute', top: -2, right: 4, minWidth: 16, height: 16, borderRadius: 8,
    paddingHorizontal: 4, backgroundColor: COLORS.danger, alignItems: 'center', justifyContent: 'center',
  },
  badgeText: { color: COLORS.card, fontSize: 10, fontWeight: 'bold' },
});
