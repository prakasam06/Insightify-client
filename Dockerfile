FROM node:21-alpine

WORKDIR /app

COPY . /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

EXPOSE 4713

CMD ["pnpm", "preview"]