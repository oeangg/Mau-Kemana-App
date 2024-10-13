FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install --force

COPY . .

RUN npx prisma generate && npm run build

CMD ["npm", "start"]