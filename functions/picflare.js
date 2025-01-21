// PicFlare by PanDaoxi.

const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
	const imagesDir = path.resolve(__dirname, "..", "public", "images");
	const imageFiles = fs.readdirSync(imagesDir);
	const randomImageFile =
		imageFiles[Math.floor(Math.random() * imageFiles.length)];
	const imagePath = path.join(imagesDir, randomImageFile);
	const imageData = fs.readFileSync(imagePath);
	const headers = {
		"Content-Type": "image/webp",
	};
	return {
		statusCode: 200,
		headers,
		isBase64Encoded: true,
		body: imageData.toString("base64"),
	};
};
