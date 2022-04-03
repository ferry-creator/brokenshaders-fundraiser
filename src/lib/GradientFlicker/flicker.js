const flicker = (canvas, buffer, { stops = [], font_size = 20 } = {}) => {
	const ctx = canvas.getContext('2d')
	const bfr = buffer.getContext('2d')
	const breakpt = 700

	const w = width()
	let columns = Math.round(w / font_size / (w > breakpt ? 4 : 1))

	const zoom = 25
	let gradientW = columns * zoom

	canvas.width = columns
	canvas.height = 1
	buffer.width = gradientW * 2
	buffer.height = 1

	let gradient = bfr.createLinearGradient(0, 0, gradientW, 0)
	for (let i = 0; i < stops.length; i++) {
		const r = i / stops.length
		gradient.addColorStop(r, stops[i])
	}
	bfr.fillStyle = gradient
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

	window.addEventListener('resize', (e) => {
		const w = width()
		columns = Math.round(w / font_size / (w > breakpt ? 4 : 2))
		gradientW = columns * zoom

		canvas.width = columns
		buffer.width = gradientW * 2

		gradient = bfr.createLinearGradient(0, 0, gradientW, 0)
		for (let i = 0; i < stops.length; i++) {
			const r = i / stops.length
			gradient.addColorStop(r, stops[i])
		}
		bfr.fillStyle = gradient
		bfr.fillRect(0, 0, gradientW, 1)
		bfr.drawImage(buffer, gradientW, 0, buffer.width, 1)
		idx = 0
		add = 1
	})
}

export default flicker

const resize = (w) => {}

// ---------------------------------------------------------------
// :: Utils
// ---------------------------------------------------------------
const width = () => window.innerWidth
