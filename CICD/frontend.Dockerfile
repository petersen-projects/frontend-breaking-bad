FROM node:8-alpine as builder

WORKDIR /frontend

ADD . / /frontend/
RUN yarn install && yarn run build:prod

FROM nginx:1.16.0-alpine

COPY --from=builder /frontend/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]