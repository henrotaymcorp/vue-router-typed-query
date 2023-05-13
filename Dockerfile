FROM node:16-alpine as deps

USER node

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

# BUILDER
FROM deps as builder

USER node

WORKDIR /app

COPY --chown=node:node --from=deps /app/node_modules ./node_modules

COPY . .

# RUNNER
FROM builder as runner

USER node

WORKDIR /app

COPY --chown=node:node --from=builder /app ./

CMD yarn dev