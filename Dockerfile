FROM node:lts-alpine

WORKDIR /app

ARG NPM_TOKEN
ENV NPM_TOKEN=${NPM_TOKEN}

RUN echo "@fiap-pos-front-end:registry=https://npm.pkg.github.com" > .npmrc \
  && echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc

COPY . .
RUN npm ci

RUN rm .npmrc

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
