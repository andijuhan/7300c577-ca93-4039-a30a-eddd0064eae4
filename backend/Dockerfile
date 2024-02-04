# Gunakan base image Node.js
FROM node:20-alpineS

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./
COPY prisma ./prisma/

# Install dependensi proyek
RUN npm install

# Salin seluruh proyek ke dalam container
COPY . .

RUN npm run build

# Expose port yang digunakan oleh aplikasi NestJS
EXPOSE 5000

# Atur variabel lingkungan jika diperlukan
ENV DATABASE_URL=postgresql://juhandi:aYlBZ4X78cPJ@postgres:5432/molicx?schema=public \
    FRONT_END_URL=http://localhost:3000 \
    JWT_SECRET_KEY=977ef56315dcbfc9bff2fb5e07785b51fc83d55a700c35d53805e87f16e29e86 \
    JWT_REFRESH_TOKEN=4b86166346dafff26886c865af1793c4f348056f4fe65d1f53b1b8bb8e89ba61 \
    REDIS_HOST=redis \
    REDIS_PORT=6379

# Generate Prisma Client, Build proyek Nest.js, dan jalankan migrasi dan aplikasi
CMD ["npm", "run", "start:migrate:prod" ]
