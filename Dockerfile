
#########################
# multi stage Dockerfile
# 1. build the website
# 2. run apache with php
#########################
FROM node:lts as builder

WORKDIR /app
COPY . .

RUN npm install \
    && npm run build

# 2. Step

FROM nginx:alpine
LABEL maintainer="Daniel Röwenstrunk for ZenMEM"

COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/
