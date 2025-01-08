import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	// Server configuration
	server: {
		port: 3000, // Port for the dev server
		hmr: true, // Enable Hot Module Replacement
	},
	// Build configuration
	build: {
		outDir: "dist", // Directory for the production build
		sourcemap: true, // Generate source maps for debugging
	},
	// Plugins
	plugins: [react()],
	// Resolve configuration
	resolve: {
		alias: {
			"@": "/src", // Shorten the import path for src directory
		},
	},
});
