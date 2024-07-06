FROM node:latest as build
WORKDIR /var/www/html
COPY . .
RUN yarn install
RUN npm run build

FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html
COPY --from=build /var/www/html/build .
EXPOSE 80