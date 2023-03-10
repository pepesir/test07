FROM fusuf/whatsasena:latest
RUN git clone https://github.com/V1P3R-X/X-AsenaDuplicated.git /XAsenaDuplicated
WORKDIR /XAsenaDuplicated
RUN npm install supervisor -g
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
