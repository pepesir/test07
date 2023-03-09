FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test- /root/Ai-test-
WORKDIR /root/Ai-test-/ 
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --network-concurrency 1

CMD ["node", "index.js"]
