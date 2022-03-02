# Install dependencies only when needed
FROM node:16-alpine as deps
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile

# Install prod dependencies only when needed
FROM node:16-alpine as proddeps
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image, copy all the files and run node
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=proddeps /app/node_modules ./node_modules

USER node
EXPOSE 3000

CMD [ "node", "build/index.js" ]
