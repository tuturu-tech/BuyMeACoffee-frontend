module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				bgGrad:
					"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
			},
			animation: {
				none: "none",
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite",
				float: "float 5s infinite",
				refloat: "refloat 3s infinite",
				"gradient-x": "gradient-x 7s ease infinite",
				glow: "glow 3s linear infinite",
				flip: "flip 1.2s ease-in-out",
			},
			keyframes: {
				spin: {
					to: { transform: "rotate(360deg)" },
				},
				ping: {
					"75%, 100%": { transform: "scale(2)", opacity: "0" },
				},
				pulse: {
					"50%": { opacity: ".5" },
				},
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
					},
					"50%": {
						transform: "none",
						animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
					},
				},
				float: {
					"0%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(-15px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				refloat: {
					"0%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				glow: {
					"0%": {
						filter: "blur(15px)",
						"background-position": "0% 50%",
					},
					"50%": {
						filter: "blur(5px)",
						"background-position": "200% 50%",
					},
					"100%": {
						filter: "blur(15px)",
						"background-position": "200% 50%",
					},
				},
				flip: {
					"100%": { transform: "perspective(1000px) rotateY(-180deg)" },
				},
			},
		},
	},
	plugins: [],
};
