//    * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//    |   RUN THIS MANUALLY FROM TERMINAL WITH NODE   |
//    |   GENERATES WOFF & WOFF2 FROM TTF             |
//    * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

const ignore = ['VCR-OSD-mono'] // Folders to ignore

import fs from 'fs'
import ttf2woff from 'ttf2woff'
import ttf2woff2 from 'ttf2woff2'

const convert = (path, file, format) => {
	const input = fs.readFileSync(`${path}/${file}`)
	const fname = file.slice(0, -4)
	if (format == 'woff') {
		const output = `${path}/${fname}.woff`
		fs.writeFileSync(output, ttf2woff(input))
	}
	if (format == 'woff2') {
		const output = `${path}/${fname}.woff2`
		fs.writeFileSync(output, ttf2woff2(input))
	}
}

const subdirs = fs
	.readdirSync('./')
	.filter((f) => fs.lstatSync(`./${f}`).isDirectory())
	.filter((f) => !ignore.some((x) => x == f))
subdirs.forEach((dir) => {
	const ls = fs.readdirSync(`./${dir}`).filter((f) => f[0] !== '.')
	ls.forEach((f) => {
		convert(`./${dir}`, f, 'woff')
		convert(`./${dir}`, f, 'woff2')
		console.log(`✅ Generated from ./${dir}/${f}`)
	})
})
