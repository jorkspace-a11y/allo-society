import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './stickers.css'

const stickers = [
  { file: 'sun', label: 'Allo Society sunshine' },
  { file: 'flower', label: 'Allo flower' },
  { file: 'star', label: 'Thumbs-up star' },
  { file: 'globe', label: 'Society globe' },
  { file: 'handshake', label: 'Allo Society handshake' },
  { file: 'lettering', label: 'Allo Society bubble lettering' },
  { file: 'pennant', label: 'Allo pennant' },
  { file: 'mountains', label: 'Allo Society mountains' },
  { file: 'lightning', label: 'AS lightning bolt' },
  { file: 'badge', label: 'Allo Society striped badge' },
]

export function HeroSticker() {
  const [selected, setSelected] = useState(0)
  const sticker = stickers[selected]
  return <div className="hero-sticker">
    <button className="sticker-swap" type="button" aria-label={`Give us a tap: change sticker. Current: ${sticker.label}`} onClick={() => setSelected((selected + 1) % 4)}>
      <img src={`${import.meta.env.BASE_URL}stickers/${sticker.file}.webp`} alt="" width="280" height="280" decoding="async" draggable="false" />
      <span>GIVE US A TAP ↗</span>
    </button>
    <span className="sticker-announcement" role="status">{sticker.label}</span>
  </div>
}

export function StickerCollage() {
  const [edition, setEdition] = useState(0)
  const [turns, setTurns] = useState([0, 0, 0, 0, 0])
  const [canDrag, setCanDrag] = useState(false)
  const reduce = useReducedMotion()
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 801px)')
    const update = () => setCanDrag(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  const remix = () => { setEdition(value => (value + 1) % 2); setTurns([0, 0, 0, 0, 0]) }
  return <div className="sticker-collage" aria-label="Allo sticker collection" role="group">
    <div className="sticker-collage-head"><p>A LITTLE ALLO ENERGY.</p><button type="button" onClick={remix}>Remix stickers ↻</button></div>
    <div className="sticker-rail">{[0, 1, 2, 3, 4].map((slot) => {
      const sticker = stickers[slot + edition * 5]
      const rotation = [-9, 7, -5, 10, -8][slot] + turns[slot] * 15
      return <div className="sticker-slot" key={slot}>
        <motion.button key={`${edition}-${canDrag}-${Boolean(reduce)}`} className="collage-sticker" type="button"
          aria-label={`Turn ${sticker.label} sticker`} drag={canDrag && !reduce}
          dragConstraints={{ left: -14, right: 14, top: -14, bottom: 14 }} dragElastic={0} dragMomentum={false}
          initial={false} animate={{ rotate: rotation }} whileHover={reduce ? undefined : { scale: 1.06 }} whileTap={reduce ? undefined : { scale: .96 }}
          transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setTurns(current => current.map((value, i) => i === slot ? (value + 1) % 4 : value))}
          style={{ touchAction: canDrag && !reduce ? 'none' : 'pan-y' }}>
          <img src={`${import.meta.env.BASE_URL}stickers/${sticker.file}.webp`} alt="" width="240" height="240" loading="lazy" decoding="async" draggable="false" />
        </motion.button>
      </div>
    })}</div>
    <div className="sticker-collage-foot"><span>{canDrag && !reduce ? 'DRAG A LITTLE. TAP TO TURN.' : 'TAP A STICKER TO TURN IT.'}</span><span role="status">SET {edition + 1} / 02</span></div>
  </div>
}
