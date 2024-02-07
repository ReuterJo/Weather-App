FROM node:lts-alpine3.14 as build

RUN apk update && \
  apk upgrade && \
  apk add --no-cache bash git openssh

RUN mkdir /frontend

WORKDIR /frontend

COPY package.json .

RUN npm install -g --force npm@latest typescript@latest yarn@latest

RUN yarn install

COPY . .

RUN yarn build

# ---------------

FROM node:lts-alpine3.14

RUN mkdir -p /frontend/build

RUN apk update && \
  apk upgrade && \
  apk add git

WORKDIR /frontend

COPY --from=build /frontend/package.json .
COPY --from=build /frontend .

RUN yarn install --production

COPY --from=build /frontend/build ./build
COPY --from=build /frontend/src/auth_config.json ./src/auth_config.json
COPY --from=build /frontend/server.js .
COPY --from=build /frontend/api-server.js .

EXPOSE 3000
EXPOSE 3001

ENV SERVER_PORT=3000
ENV API_PORT=3001
ENV NODE_ENV production

CMD ["yarn", "prod"]
