FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test-  /root/Ai-test-
WORKDIR /root/Ai-test-/ 
ENV KL=Kerala/India
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "index.js"]
