FROM node:18-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

FROM node:18-slim AS runner

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .

EXPOSE 3000

CMD ["npm", "start"]
