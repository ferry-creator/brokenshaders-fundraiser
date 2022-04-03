const flicker = (canvas, buffer, { stops = [], font_size = 20 } = {}) => {
	const ctx = canvas.getContext('2d')
	const bfr = buffer.getContext('2d')

	// window.addEventListener('resize', (e) => {
	//   resize(width())
	// })

	const columns = Math.round(width() / font_size / 4)

	const zoom = 25
	const gradientW = columns * zoom

	canvas.width = columns
	canvas.height = 1
	buffer.width = gradientW * 2
	buffer.height = 1

	const gradient = bfr.createLinearGradient(0, 0, gradientW, 0)
	for (let i = 0; i < stops.length; i++) {
		const r = i / stops.length
		gradient.addColorStop(r, stops[i])
	}
	bfr.fillStyle = gradient
	for (let i = 0; i < 3; i++) {}
	bfr.fillRect(0, 0, gradientW, 1)
	bfr.drawImage(buffer, gradientW, 0, buffer.width, 1)

	// let frm = 0
	let idx = 0
	let add = 1
	const loop = () => {
		requestAnimationFrame(loop)
		// frm++
		// if (frm % 1 != 0) return

		ctx.drawImage(buffer, idx, 0, gradientW / zoom, 1, 0, 0, canvas.width, 1)
		if (idx >= gradientW) add = -1
		if (idx <= 0) add = 1
		idx += add
	}
	loop()
}

export default flicker

const resize = (w) => {}

// ---------------------------------------------------------------
// :: Utils
// ---------------------------------------------------------------
const width = () => window.innerWidth
