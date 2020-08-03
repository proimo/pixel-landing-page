FROM nginx:1.17.1-alpine

WORKDIR /app

RUN rm -rf /usr/share/nginx/html/*
COPY /dist /usr/share/nginx/html
