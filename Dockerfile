# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
#RUN npm i -g @quasar/cli
RUN npm install
COPY . .
RUN nuxt build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
