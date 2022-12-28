import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import StartNFT from './nft'

let marker = {
	width: 874,
	height: 590,
	dpi: 150,
	url: "../../../DataNFT/image2023"
};

let container = document.getElementById("app");
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	let hint = {
		audio: false,
		video: true
	};
	// if (window.innerWidth < 800) {
		console.log(window.innerWidth, window.innerHeight);
		let width = window.innerWidth;
		let aspectRatio = window.innerWidth / window.innerHeight;
		hint = {
			audio: false,
			video: {
				facingMode: "environment",
				width: 640,
				height: 480,
				// aspectRatio: window.innerWidth / window.innerHeight
			}
		};
		console.log(hint);
	// }

	navigator.mediaDevices.getUserMedia(hint).then(function(stream) {
		video.srcObject = stream;
		video.addEventListener("loadedmetadata", () => {
			video.play();
			console.log("video", video, video.videoWidth, video.videoHeight);
			StartNFT(
				container,
				marker,
				video,
				video.videoWidth,
				video.videoHeight,
				canvas,
				function() {
					// statsMain.update();
				},
				function() {
					// statsWorker.update();
				},
				null
			);
		});
	});
}
