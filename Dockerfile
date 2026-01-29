FROM node:22.19.0-alpine

RUN npm install -g bun

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]