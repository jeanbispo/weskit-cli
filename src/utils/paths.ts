
const files = require('./files');

const path_build = files.getCurrentDirectory() + '/www';
const path_source = files.getCurrentDirectory() + '/app';

let Paths = {

    js: {
        "pwa-cache-service-worker": {
            buildTo: `${path_build}`,
            bundle: [`${path_source}/pwa-cache-service-worker.js`],
			skipSourceMapGeneration: true
        },
        "internal-critical": {
            buildTo: `${path_build}/js`,
			bundle: [],
			skipSourceMapGeneration: true
        },
        "internal": {
            buildTo: `${path_build}/js`,
            bundle: []
        },
        "external-critical": {
            buildTo: `${path_build}/js`,
            bundle: [],
			skipSourceMapGeneration: true
        },
        "external": {
            buildTo: `${path_build}/js`,
            bundle: []
        }
    },
    css: {
        "external-critical": {
            buildTo: `${path_build}/css`,
            bundle: []
        },
        "external": {
            buildTo: `${path_build}/css`,
            bundle: []
        }
    },
    sass: {
        "internal-critical": {
            buildTo: `${path_build}/css`,
            bundle: [],
			skipSourceMapGeneration: true
        },
        "internal": {
            buildTo: `${path_build}/css`,
            bundle: []
        },
        "external-critical": {
            buildTo: `${path_build}/css`,
            bundle: [],
			skipSourceMapGeneration: true
        },
        "external": {
            buildTo: `${path_build}/css`,
            bundle: []
        }
    },
    views: {
        source: `${path_source}/**/*.{html,php}`,
        buildTo: `${path_build}`
    },
    jsons: {
        source: `${path_source}/**/*.json`,
        buildTo: `${path_build}`
    },
    metadata: {
        source: [
            `${path_source}/humans.txt`,
            `${path_source}/robots.txt`
        ],
        buildTo: `${path_build}`
    },
    fonts: {
        source: [
            `${path_source}/fonts/**/*.{ttf,otf,eot,woff,svg,svgz}`,
            `${path_source}/fonts/*.{ttf,otf,eot,woff,svg,svgz}`
        ],
        buildTo: `${path_build}/fonts`
    },
    sounds: {
        source: [
            `${path_source}/sounds/**/*.{mp3,aac,wav,ogg}`,
            `${path_source}/sounds/*.{mp3,aac,wav,ogg}`
        ],
        buildTo: `${path_build}/sounds`
    },
    videos: {
        source: [
            `${path_source}/videos/**/*.{mp4,ogg,webm}`,
            `${path_source}/videos/*.{mp4,ogg,webm}`
        ],
        buildTo: `${path_build}/videos`
	},
	images: {
		compress: {
			source: `${path_source}/images/**/*.{jpg,png,jpeg,gif,svg}`,
			buildTo: `${path_build}/images`
		},
		sprites: {
			source: `${path_source}/images/sprites/*.{jpg,png,jpeg,gif,svg}`,
			buildTo: `${path_build}/images`
		},
		icons: {
			source: `${path_source}/images/pwa-icons/*.{jpg,png,jpeg,gif,svg}`,
			buildTo: `${path_build}/images/pwa-icons/`
		}
	}

}

module.exports = Paths;