const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination);
}

fs.readdirSync(target)
	.forEach(image => {
		try {
			// Change the size of picture to 800px and adding prefix -lg.jpg
			sharp(`${target}/${image}`)
				.resize(800)
				.toFile(path.resolve(
					__dirname,
					`${destination}/${image.split('.').slice(0, -1).join('.')}-lg.jpg`),
				);

			// Change the size of picture to 480px and adding prefix -sm.jpg
			sharp(`${target}/${image}`)
				.resize(480)
				.toFile(path.resolve(
					__dirname,
					`${destination}/${image.split('.').slice(0, -1).join('.')}-sm.jpg`),
				);
		} catch (error) {
			console.error(`Error processing ${image}: ${error.message}`);
		}
	});
