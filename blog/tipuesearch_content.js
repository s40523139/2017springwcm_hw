var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog","url":"./pages/about/","tags":"misc","title":"About"},{"text":"-> sudo apt update 更新 -> sudo rm /var/lib/dkpg/lock 解開 /var/lib/dkpg/ 的 lock -> sudo apt upate 確認是否最新 -> sudo apt install nginx 安裝 nginx -> cd /var/www/html 進入 ->ls -l 長形列印 -> sudo vi index.nginx-debian.html 修改 from 劉育彤 on Vimeo .","url":"./zai-ubuntu-zhong-an-zhuang-nginx-si-fu.html","tags":"Misc","title":"在 ubuntu 中安裝 nginx 伺服"},{"text":"這是用putty連接到我們實際組裝的那台電腦 但是因為那台電腦處於純ipv6網路 所以只能拍攝putty相關的設定 from 劉育彤 on Vimeo .","url":"./yong-puttylai-lian-jie-an-zhuang-de-zhu-ji.html","tags":"Course","title":"用putty來連接安裝的主機"},{"text":"以下為網際內容管理 2017 Spring 第十八週學員連結. window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } 甲班學員投影片: from browser import document, html container1 = document['container1'] adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2017springwcm_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container1 <= mlink 甲班學員網誌: from browser import document, html adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() container2 = document['container2'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2017springwcm_hw/blog\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container2 <= mlink 甲班學員倉儲: from browser import document, html adata = open(\"./../data/final/1a_list.txt\").read() alist = adata.splitlines() container3 = document['container3'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2017springwcm_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container3 <= mlink","url":"./2017spring-wcm-final.html","tags":"Course","title":"期末考週"},{"text":"步驟 : sudo apt update 更新 -> sudo rm /var/lib/dkpg/lock 移除 /var/lib/dkpg的lock -> sudo apt install stunnel4 -y 安裝 stunnel -> sudo apt install fossil 安裝 fossil -> sudo vi /etc/environment 設定環境 ->案O 並輸入[HTTPS=on] ->:wq 改寫並離開 -> sudo vi /etc/default/stunnel4 設定 stunnel 找到ENABLED=0(改成1) stunnel.conf ->sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt ->sudo vi /etc/stunnel/stunnel.conf 改寫 stunnel.conf ->[https] accept = your_IPv4_ip:443 accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/mde2a1.fossil -- https --nojail ->:wq -> /etc/init.d/stunnel4 restart 須重新啟動 stunnel4 from 劉育彤 on Vimeo .","url":"./virtualboxzhong-qi-dong-stunnel.html","tags":"Misc","title":"virtualbox中啟動 stunnel"},{"text":"步驟 : mkdir test -> cd tset -> fossil clone https://(這裡加帳號就不用再 push ex : 40523139@)mde2a2.kmol.info/wcmg7/wiki?name=wcmg7 text.foosil -> mk wd -> cd wd -> fossil open cd ./../test.fossil( 把影片丟進去 ) -> fossil add . 加入 -> fossil commit -m \"\" -> fossil push (剛剛有加帳號就不用在 push)","url":"./ru-he-jiang-ying-pian-shang-chuan-zhi-fossil.html","tags":"Misc","title":"如何將影片上傳至 fossil"},{"text":"下載這學期用的tiny2017_1GB 並打開start.bat 在tmp目錄下有一個CMsimfly的檔案 先查 ip用 ipconfig 用 scite 把wsgi.py 打開 把 ip 改成自己的 步驟 : cd tmp -> cd CMsimfly -> pyhton wsgi.py 打開leo 把wsgi.py的檔案打開 可以修改CMsimfly的內容 from 劉育彤 on Vimeo .","url":"./qi-dong-cmsimfly.html","tags":"Misc","title":"啟動 CMsimfly"},{"text":"請在期中考週時段, 以組為單位完成下列指定任務. 建立 Ubuntu 虛擬主機 請各組在 Virtualbox 中, 以橋接網路卡設定, 建立一台 Ubuntu 16.04 伺服主機, 設定 IPv4 網路連線後, 以 sudo apt install nginx 後, 利用瀏覽器連接所安裝的 nginx 伺服器後, 即完成第1項任務. 以 Stunnel 建立 Fossil SCM Server 請參考 Ubuntu 16.04 環境下啟動 Stunnel 與 Fossil SCM 中的說明, 設法在 Ubuntu 虛擬主機中, 啟動 https 模式下的 Fossil SCM Server. 完成後為每位組員建立帳號, 並讓組員從其他 client 端電腦連線後, 分別建立以[\"學號\"期中報告]為標題的 Wiki 頁面, 並在其中概述各組元的課程學習心得. 以 Fossil SCM 版次管理檔案 請參考 http://mde.tw/2017springvcp/blog/fossil-scm-version-control.html 中的說明, 利用各組所建立, 虛擬主機上的 Fossil SCM Server, 管理各組員利用 ShareX 在現場所拍攝的操作練習影片, 完成後請回報各組虛擬主機 IP 與 Fossil SCM 設定連結, 以便進行查驗. 啟動 CMSimfly 請在各組所建立的虛擬主機中啟動 CMSfimly 網際內容管理系統, 並設法將上述各文字資料與影片資料嵌入頁面中, 完成後即可以進行各組期中自評與互評成績登錄.","url":"./2017spring-wcm-midterm.html","tags":"Course","title":"期中分組任務"}]};