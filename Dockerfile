FROM node:16-alpine
COPY . /app/3d-profolio
WORKDIR /app/3d-profolio
RUN npm install
RUN npm install -g serve
RUN npm run build
EXPOSE 3001
CMD ["serve", "-l", "3001", "-s", "build"]
