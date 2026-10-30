# Allo Society supplied stickers

Source: owner-supplied [Google Drive sticker pack](https://drive.google.com/drive/folders/1kRYWGgjulvrrhhhO3057SbgxdzpOmeRR).

Ten cutout PNGs were selected from the folder. Web delivery copies preserve artwork, color and transparency, resized proportionally to a maximum 640px edge and encoded as WebP (quality 84, alpha quality 100). No generated replacement artwork, recoloring or background removal was used. Original files remain in Drive. These graphics are decorative stickers, not replacements for the official header logo or favicon.

| Web file | Source Drive file ID |
| --- | --- |
| lettering.webp | 1vMLwJs4129x3x4Komy-zRVu5qQOVVQne |
| sun.webp | 1rEo5JZNxSoL--rd1Y8z7aX3NkZQdRltC |
| mountains.webp | 1mXOJBNNnanHwo7DsDgA8UKprLt1fV182 |
| badge.webp | 101wefAVsciNstMzOPOROGU0gxHLL_7UK |
| handshake.webp | 157wB6hQ28shpsPmwouKwnjn5TMtaHHGk |
| globe.webp | 1hktu7IsBuRWP7ej-eBM5oR8th2q_Yv7L |
| pennant.webp | 1BK6_yekgmM4TILpD1R4tLDLCqpEBusYt |
| star.webp | 1L1QbNhDNObyr56cO5K1wgr2rWuJH8aJg |
| flower.webp | 1z_LnNVyx1HvOAqrCP8bZMVeIKT2sC8p0 |
| lightning.webp | 1Qjlz7u-Y11v3n_6gkH5up0SgtTTNgYxQ |

Implementation: `src/Stickers.tsx` and `src/stickers.css`. The hero cycles four character stickers. About shows two sets of five, with tap/keyboard rotation and optional bounded desktop dragging. Mobile retains vertical scrolling. Reduced motion disables drag and animated transitions while keeping selection usable. No continuous animation or autoplay.
