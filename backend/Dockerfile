# Gunakan base image Node.js
FROM node:21-alpine

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependensi proyek
RUN npm install

# Salin seluruh proyek ke dalam container
COPY . .

# Instal wait-for-it.sh
RUN wget -O /usr/local/bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-it.sh

# Expose port yang digunakan oleh aplikasi NestJS
EXPOSE 5000

# Atur variabel lingkungan jika diperlukan
ENV DATABASE_URL="postgresql://juhandi:aYlBZ4X78cPJ@localhost:5432/molicx?schema=public" \
    FRONT_END_URL="http://localhost:3000" \
    JWT_SECRET_KEY="977ef56315dcbfc9bff2fb5e07785b51fc83d55a700c35d53805e87f16e29e86" \
    JWT_REFRESH_TOKEN="4b86166346dafff26886c865af1793c4f348056f4fe65d1f53b1b8bb8e89ba61" \
    REDIS_HOST="localhost" \
    REDIS_PORT=6379

# Generate Prisma Client, Build proyek Nest.js, dan jalankan migrasi dan aplikasi
CMD ["sh", "-c", "/usr/local/bin/wait-for-it.sh postgres:5432 -- npx prisma generate && npm run build && npx prisma migrate dev && npm run start:dev"]
