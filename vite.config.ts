import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // Додаємо базовий шлях для правильного розміщення файлів
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']  // Додаємо підтримку TypeScript розширень
  }
});
