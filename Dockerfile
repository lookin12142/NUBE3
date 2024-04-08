FROM Node:latest

WORKDIR /nube

COPY . .

RUN  npm install

CMD ["node","app.js"]
