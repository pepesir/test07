FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test- /root/Kriz/
WORKDIR /root/Kriz/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --network-concurrency 1

CMD ["node", "index.js"]
