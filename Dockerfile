FROM node:21-alpine

WORKDIR /app

COPY . /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build --mode production

EXPOSE 4173

CMD ["pnpm", "preview"]