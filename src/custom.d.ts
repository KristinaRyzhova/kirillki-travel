// Декларация для SVG
declare module '*.svg' {
	import * as React from 'react';
	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

// Декларация для PNG
declare module '*.png' {
	const content: string;
	export default content;
}

// Декларация для JPG
declare module '*.jpg' {
	const content: string;
	export default content;
}

// Декларация для JSON
declare module '*.json' {
	const content: Record<string, unknown>;
	export default content;
}

// CSS модули
declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { [key: string]: string };
	export default classes;
}

// Обычные CSS
declare module '*.css' {
	const classes: { [key: string]: string };
	export default classes;
}

/* declare module '*.svg' {
	import React = require('react'); // A `require()` style import is forbidden.eslint@typescript-eslint/no-require-imports
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}
declare module '*.png' {
	const content: any; // Unexpected any. Specify a different type.eslint@typescript-eslint/no-explicit-any
	export default content;
}
declare module '*.jpg' {
	const content: any; // Unexpected any. Specify a different type.eslint@typescript-eslint/no-explicit-any
	export default content;
}
declare module '*.json' {
	const content: any; // Unexpected any. Specify a different type.eslint@typescript-eslint/no-explicit-any
	export default content;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.css' {
	const classes: { [key: string]: string };
	export default classes;
} */