import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/cube-dashboard-fe/',
    define: {
      'process.env.REACT_APP_CUBEJS_TOKEN': JSON.stringify(env.REACT_APP_CUBEJS_TOKEN),
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL)
    },
    plugins: [react()],
  }
})