import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

// Nama ikon di Figma (halaman Ikon) -> ikon padanan di @expo/vector-icons.
// Cek nama lain di icons.expo.fyi
const ICONS = {
  arrow:     { lib: 'ion', name: 'arrow-back' },
  heart:     { lib: 'ion', name: 'heart-outline' },
  'heart-filled': { lib: 'ion', name: 'heart' },
  close:     { lib: 'ion', name: 'close' },
  plus:      { lib: 'ion', name: 'add' },
  minus:     { lib: 'ion', name: 'remove' },
  star:      { lib: 'ion', name: 'star' },
  search:    { lib: 'ion', name: 'search' },
  top:       { lib: 'ion', name: 'shirt-outline' },
  cart:      { lib: 'ion', name: 'cart-outline' },
  home:      { lib: 'ion', name: 'home-outline' },
  profile:   { lib: 'ion', name: 'person-outline' },
  edit:      { lib: 'ion', name: 'create-outline' },
  aksesoris: { lib: 'ion', name: 'diamond-outline' },
  // Skirt & Dress TIDAK ada di @expo/vector-icons -> sementara pakai 'hanger'.
  // Ganti dengan PNG hasil ekspor Figma jika ingin persis sama.
  skirt:     { lib: 'mci', name: 'hanger' },
  dress:     { lib: 'mci', name: 'hanger' },
};

// <Icon name="heart" size={24} color={COLORS.primary} />
// Nama yang tidak ada di daftar di atas dianggap nama Ionicons langsung.
export default function Icon({ name, size = 24, color = COLORS.primary, style }) {
  const def = ICONS[name] || { lib: 'ion', name };
  const Lib = def.lib === 'mci' ? MaterialCommunityIcons : Ionicons;
  return <Lib name={def.name} size={size} color={color} style={style} />;
}
