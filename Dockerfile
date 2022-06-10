FROM node:18-alpine

WORKDIR /mono

RUN npm --location=global i npm; npm --location=global i pnpm

EXPOSE 3000
