
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
LABEL maintainer="Daniel Röwenstrunk for ZenMEM" \
      org.opencontainers.image.source="https://github.com/Edirom/zenmem.de"

COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/
