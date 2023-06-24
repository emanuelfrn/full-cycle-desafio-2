FROM node:18.16.0-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]