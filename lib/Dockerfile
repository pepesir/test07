FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test-  /Ai-test-
WORKDIR /Ai-test-
ENV KL=Kerala/India
RUN npm install supervisor -g
RUN yarn install --no-audit
CMD ["node", "index.js"]
