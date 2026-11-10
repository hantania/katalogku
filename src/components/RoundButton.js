import { Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// <RoundButton icon="arrow" onPress={...} />
// active=true -> latar primary, ikon putih. active=false -> latar putih, ikon primary.
// Contoh tombol favorit: <RoundButton icon={fav ? 'heart-filled' : 'heart'} active={fav} />
export default function RoundButton({ icon, active = false, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        active ? styles.active : styles.idle,
        pressed && styles.pressed,
      ]}>
      <Icon name={icon} size={20} color={active ? COLORS.card : COLORS.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40, height: 40, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center',
    // shadow 4 4 4 rgba(0,0,0,0.25)
    elevation: 4,
    shadowColor: '#000', shadowOpacity: 0.25,
    shadowRadius: 4, shadowOffset: { width: 4, height: 4 },
  },
  idle: { backgroundColor: COLORS.card },
  active: { backgroundColor: COLORS.primary },
  pressed: { opacity: 0.8 },
});
