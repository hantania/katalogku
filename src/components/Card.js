import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Icon from './Icon';

// type: 'home' | 'search' | 'wishlist'  (sama dengan varian ProductCard di Figma)
//  home     : tombol favorit (outline) + rating di sebelah harga
//  search   : hanya foto, nama, harga
//  wishlist : tombol favorit terisi + baris rating/ulasan di bawah harga
// discount : angka persen -> label "-10%" di pojok foto (latihan M3, belum ada di Figma)
export default function Card({
  title, price, image, rating, reviews, discount,
  type = 'home', favorit = false, onPress, onToggleFavorit,
}) {
  const home = type === 'home';
  const wishlist = type === 'wishlist';
  const heartOn = wishlist || favorit;
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.clip}>
        <View>
          <Image source={{ uri: image }} style={styles.photo} />
          {discount ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>-{discount}%</Text>
            </View>
          ) : null}
          {home || wishlist ? (
            <Pressable style={styles.heart} onPress={onToggleFavorit} hitSlop={8}>
              <Icon
                name={heartOn ? 'heart-filled' : 'heart'}
                size={14}
                color={heartOn ? COLORS.primary : COLORS.muted}
              />
            </Pressable>
          ) : null}
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{title}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$ {price}</Text>
            {home && rating != null ? (
              <View style={styles.rating}>
                <Icon name="star" size={12} color={COLORS.accent} />
                <Text style={styles.ratingText}>{rating}</Text>
              </View>
            ) : null}
          </View>
          {wishlist && rating != null ? (
            <View style={styles.reviews}>
              <Icon name="star" size={13} color={COLORS.accent} />
              <Text style={styles.reviewText}>
                {rating}{reviews != null ? ` (${reviews} ulasan)` : ''}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, margin: 6, backgroundColor: COLORS.card, borderRadius: 12,
    // shadow 0 2 8, 8%
    elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.08,
    shadowRadius: 8, shadowOffset: { width: 0, height: 2 },
  },
  clip: { borderRadius: 12, overflow: 'hidden' },
  photo: { width: '100%', height: 152, backgroundColor: COLORS.border },
  badge: {
    position: 'absolute', top: 8, left: 8, backgroundColor: COLORS.danger,
    borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2,
  },
  badgeText: { color: COLORS.card, fontSize: 12, fontWeight: 'bold' },
  heart: {
    position: 'absolute', top: 8, right: 8, width: 28, height: 28, borderRadius: 14,
    backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
    alignItems: 'center', justifyContent: 'center',
  },
  info: { padding: 10, gap: 4 },
  name: { fontSize: 14, lineHeight: 20, fontWeight: '400', color: COLORS.text },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 14, lineHeight: 20, fontWeight: '600', color: COLORS.accent },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  ratingText: { fontSize: 13, lineHeight: 20, color: COLORS.text },
  reviews: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  reviewText: { fontSize: 13, lineHeight: 20, color: COLORS.muted },
});
