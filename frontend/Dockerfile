# Gunakan base image Node.js dengan Alpine Linux
FROM node:20

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependensi proyek
RUN npm install

# Salin seluruh proyek ke dalam container
COPY . .

# Atur variabel lingkungan
ENV NEXT_PUBLIC_BASE_URL="http://localhost:3000" \
    NEXT_PUBLIC_API_URL="http://localhost:5000" \
    AUTH_SECRET="b61e3d26e28669e5ecba8ee36cca120ee58200f470a257f84d488b9158ddd0c8"

# Build proyek Next.js
RUN npm run build

# CMD untuk menjalankan aplikasi saat container dijalankan
CMD ["npm", "start"]
