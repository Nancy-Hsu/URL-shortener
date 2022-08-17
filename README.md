# URL-shortener |  短網址產生器
" 短網址產生器 " 能把一長串網址縮短為較短的短網址，除了美觀，也能符合限制字數的需求。
- 輸入你的網址按下 shorten
- 一鍵複製產出的短網址
- 貼在各個地方都可以用
<br />
<img width="647" alt="2-3 A11-2" src="https://user-images.githubusercontent.com/108853120/185084281-e434470d-f56f-46ad-ae46-ae3c663227b3.png">



## 安裝流程

1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地 `git clone https://github.com/Nancy-Hsu/URL-shortener.git`

3. 在本地開啟之後，透過終端機進入資料夾，輸入： `npm install`

4. 安裝完畢後，設定環境變數連線 MongoDB `URL_MONGODB=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority`

5. 繼續輸入： `npm run dev`

6. 若看見此行訊息則代表順利運行， `express iapp is listening on 3000`

7. 接下來就可以打開瀏覽器進入以下網址 http://localhost:3000 開始使用囉！

8. 若欲暫停使用，按下 ctrl + c 即可

<br />
<br />

## 開發工具
- Node.js 14.16.0
- Express 4.18.1
- Express-Handlebars 4.0.2
- MongoDB
- mongoose 5.9.7
