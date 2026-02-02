import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,        // this is important for CodeSandbox
    allowedHosts: ['.csb.app']   // allows any *-xxxx.csb.app subdomain
  }
});