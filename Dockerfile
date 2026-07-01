# ==========================================
# Stage 1: Build environment (Node.js)
# ==========================================
FROM node:20-alpine as builder

# Set working directory di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install semua dependencies secara clean
RUN npm ci

# Copy seluruh source code ke dalam container
COPY . .

# Build aplikasi untuk production (hasilnya akan ada di folder /dist)
RUN npm run build

# ==========================================
# Stage 2: Production environment (Nginx)
# ==========================================
FROM nginx:alpine

# Copy hasil build dari stage 1 (builder) ke direktori HTML Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opsional) Jika Anda memiliki file custom nginx.conf, Anda bisa meng-copy-nya di sini
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ekspos port 80 agar bisa diakses dari luar container
EXPOSE 80

# Jalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]
