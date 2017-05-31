var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","url":"./pages/about/","tags":"misc"},{"title":"W15練習","text":"組員協同練習 正齒輪 from 鲜奶仙草冻 on Vimeo . window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 36 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 與 2A 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() data1 = open(\"./../data/w11/2a0504.txt\", encoding=\"utf-8\").read() count = 0 count1 = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] student1 = data1.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") # 請注意, Brython 在 Windows 環境無法正確判定字串, 原因不明 if each[1] != \"出席\": count = count + 1 for i in range(len(student1)): each1 = student1[i].split(\"\\t\") if each1[1] != \"present\": count1 = count1 + 1 div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) + \"|\" + \"2a: \" + str(count1) + \"/\" + str(len(student1))","url":"./w15lian-xi.html","tags":"40423224"},{"title":"cango2DSpurSimulate","text":"正齒輪2d模擬 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 53 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 與 2A 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() data1 = open(\"./../data/w11/2a0504.txt\", encoding=\"utf-8\").read() count = 0 count1 = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] student1 = data1.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") # 請注意, Brython 在 Windows 環境無法正確判定字串, 原因不明 if each[1] != \"出席\": count = count + 1 for i in range(len(student1)): each1 = student1[i].split(\"\\t\") if each1[1] != \"present\": count1 = count1 + 1 div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) + \"|\" + \"2a: \" + str(count1) + \"/\" + str(len(student1)) # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 #cobj = window.Cobj.new shape = window.Shape.new path = window.Path.new creategeartooth = window.createGearTooth.new tweener = window.Tweener.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = shape(data, { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = path(shapedefs.circle(hr)) shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path # setup the animation # backlash (mm) bklsh = 0.04*m # centre shift to make backlash dC = bklsh/(2*math.tan(math.pi*pa/180)) # np 為小齒輪齒數 np = 13 # gear ratio gr = n/np gearConfig = {'cx':-pr, 'cy':0, 'degs':[0, 360]} # gr*0.666 rpm #pinionConfig = {'cx':pr+dC, 'cy':0, 'degs':[0, -gr*360]} # 0.666 rpm twnr = tweener(0, 90000, \"loop\") cx = canvas.width/2 cy = canvas.height/2 #gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 #cgo.render(gear) # 利用 gear 資料複製一份, 命名為 gear1 gear1 = gear.dup() from time import time from browser.timer import request_animation_frame as raf from browser.timer import set_interval deg = math.pi/180 def draw(): cgo.clearCanvas() gear.rotate(2*deg) # 在特定位置, 以特定 scale, 特定 degs 執行 render cgo.render(gear, {'x':cx-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear1.rotate(-2*deg) cgo.render(gear1, {'x':cx+pr*2*0.5-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) set_interval(draw, 2)","url":"./cango2dspursimulate.html","tags":"40423224"},{"title":"week12","text":"期末協同實習專案規劃與執行 期末協同實習專案規劃與執行,上課時段準備以oral presentation, text presentation,theoretical presentation 逐步朝期末考週 physical presentation的目標邁進。 oral presentation:口語說明進度，規劃細節，分工情形，問題討論。 text presentation:以gh-pages的blog與Fossil SCM 倉儲wiki紀錄每周專題執行情形。 並利用github與Fossil SCM倉儲管理衍生的檔案。 theoretical presentation:利用Solvespace，Onshape，V-rep，Brython進行評估模擬。 physical presentation:在期末考周必須完成實體模型製作，並以video影片展示各階段的準備工作與執行結果。","url":"./week12.html","tags":"40423224"},{"title":"week11","text":"閱讀關於onshape的設計理念，寫出 心得 寫出篩選學生數量的py檔 嘗試利用cango做出正齒輪 2017-05-09_20-40-55 from 40423212 on Vimeo . 利用 Brython 3.3.1 執行四連桿運動模擬. 結合 Brython 3.3.1 與 Cango-9v05.js 繪圖, 將 Cango Canvas 繪圖範例 轉為 Brython. Cango 程式庫 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new # 利用 browser 中的 document 擷取 id = \"cango_div\" 的標註 cango_div = doc[\"cango_div\"] def sayHullo(cvsID): # create a graphics context cgo = cango(cvsID) # use RH Cartesian on full canvas cgo.setGridboxRHC() # Different X and Y scale cgo.setWorldCoords(-10, -5, 20, 10) cgo.drawText(\"以 Cango 顯示中文\", { 'fillColor': \"blue\", 'fontSize': 58, 'lorg':5 }) sayHullo(\"cango_canvas\") cango_div <= \"以 Brython 顯示中文\" 上述 Cango 與 Brython 文字列印程式碼: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new # 利用 browser 中的 document 擷取 id = \"cango_div\" 的標註 cango_div = doc[\"cango_div\"] def sayHullo(cvsID): # create a graphics context cgo = cango(cvsID) # use RH Cartesian on full canvas cgo.setGridboxRHC() # Different X and Y scale cgo.setWorldCoords(-10, -5, 20, 10) cgo.drawText(\"以 Cango 顯示中文\", { 'fillColor': \"blue\", 'fontSize': 58, 'lorg':5 }) sayHullo(\"cango_canvas\") cango_div <= \"以 Brython 顯示中文\" Cango drawPath 範例: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new def plotSine(cvsID): data = [] g = cango(cvsID) g.setGridboxRHC(10, 10, 80, 60) g.setWorldCoords(0, -50, 2*math.pi, 100) g.drawAxes(0, 6.5, -50, 50, { 'xOrigin':0, 'yOrigin':0, 'fontSize':10, 'strokeColor':'gray'}) for i in range(int(2*math.pi/0.03)): #[0, 0.03, 0.06 ... 3.14159] i = i * 0.03 # 特別注意在 Javascript 採用 data.push(i, 50*math.sin(i)), 但是 Python 必須分為兩段 append data.append(i) data.append(50*math.sin(i)) g.drawPath(data, {'strokeColor':'red'}) plotSine(\"cango_canvas1\") 以上繪圖程式碼: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new def plotSine(cvsID): data = [] g = cango(cvsID) g.setGridboxRHC(10, 10, 80, 60) g.setWorldCoords(0, -50, 2*math.pi, 100) g.drawAxes(0, 6.5, -50, 50, { 'xOrigin':0, 'yOrigin':0, 'fontSize':10, 'strokeColor':'gray'}) for i in range(int(2*math.pi/0.03)): #[0, 0.03, 0.06 ... 3.14159] i = i * 0.03 # 特別注意在 Javascript 採用 data.push(i, 50*math.sin(i)), 但是 Python 必須分為兩段 append data.append(i) data.append(50*math.sin(i)) g.drawPath(data, {'strokeColor':'red'}) plotSine(\"cango_canvas1\") 重用 Cango 繪圖物件: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new shape = window.Shape.new shapedefs = window.shapeDefs def drawSpiral(cvsID): g = cango(cvsID) chamber = ['M',289.16,447.14, 'C',233.33,399.03, 267.47,290.34, 364.53,265.28, 408.88,269.91, 448.14,282.58, 483.22,303.79, 391.79,287.12, 292.99,369.50, 331.90,451.11, 318.79,447.43, 302.35,446.61, 289.16,447.14, 'z'] cobj = shape(chamber, { 'fillColor':\"lightyellow\", 'strokeColor':\"tan\", 'lineWidthWC':4, 'border':True }) cobj.translate(-287, -536) g.setGridboxSVG() g.setWorldCoords(-250, -320, 500) # draw the spiral center dot g.drawShape(shapedefs.circle(8), {'fillColor':\"tan\"}) # draw the 50 spiral segments scale = 1 for i in range(50): scale = scale/1.08 g.render(cobj, {'scl':scale, 'degs':i*24.5}) drawSpiral(\"cango_canvas2\") 上述繪圖程式碼: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new shape = window.Shape.new shapedefs = window.shapeDefs def drawSpiral(cvsID): g = cango(cvsID) chamber = ['M',289.16,447.14, 'C',233.33,399.03, 267.47,290.34, 364.53,265.28, 408.88,269.91, 448.14,282.58, 483.22,303.79, 391.79,287.12, 292.99,369.50, 331.90,451.11, 318.79,447.43, 302.35,446.61, 289.16,447.14, 'z'] cobj = shape(chamber, { 'fillColor':\"lightyellow\", 'strokeColor':\"tan\", 'lineWidthWC':4, 'border':True }) cobj.translate(-287, -536) g.setGridboxSVG() g.setWorldCoords(-250, -320, 500) # draw the spiral center dot g.drawShape(shapedefs.circle(8), {'fillColor':\"tan\"}) # draw the 50 spiral segments scale = 1 for i in range(50): scale = scale/1.08 g.render(cobj, {'scl':scale, 'degs':i*24.5}) drawSpiral(\"cango_canvas2\") 目前正透過 https://github.com/mdecourse/kmol2018 測試 Windows 64 位元可攜 Python3.6.1 與 Brython 3.3.1 的應用, 已經發現 Pelican DISPLAY_PAGES_ON_MENU 無法運作, 且 Brython 3.3.1 在 Windows 環境中無法正確擷取字串值. Snap 程式庫 from browser import alert from browser import window, document # 將 Snap 轉為 Brython 物件 snap = window.Snap.new # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) 上述 Snap 繪圖程式碼: from browser import alert from browser import window, document # 將 Snap 轉為 Brython 物件 snap = window.Snap.new # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) from browser import window from browser import document # 將 Snap 轉為 Brython 物件 snap = window.Snap.new s = snap(\"#svgout1\") # 建立物件時, 同時設定 id 名稱 r = s.rect(10,10,100,100).attr({'id': 'rect'}) c = s.circle(100,100,50).attr({'id': 'circle'}) r.attr('fill', 'red') c.attr({ 'fill': 'blue', 'stroke': 'black', 'strokeWidth': 10 }) r.attr({ 'stroke': '#123456', 'strokeWidth': 20 }) s.text(180,100, '點按一下圖形').attr({'fill' : 'blue', 'stroke': 'blue', 'stroke-width': 0.2 }) g = s.group().attr({'id': 'tux'}) def hoverover(ev): g.animate({'transform': 's1.2r45,t180,20'}, 1000, window.mina.bounce) def hoverout(ev): g.animate({'transform': 's1r0,t180,20'}, 1000, window.mina.bounce) # callback 函式 def onSVGLoaded(data): #s.append(data) g.append(data) #g.hover(hoverover, hoverout ) g.text(300,100, '將滑鼠指向企鵝') # 利用 window.Snap.load 載入 svg 檔案 tux = window.Snap.load(\"https://chiamingyen.github.io/kmolab_data/files/Dreaming_tux.svg\", onSVGLoaded) g.transform('t180,20') # 與視窗事件對應的函式 def rtoyellow(ev): r.attr('fill', 'yellow') def ctogreen(ev): c.attr('fill', 'green') # 根據物件 id 綁定滑鼠事件執行對應函式 document['rect'].bind('click', rtoyellow) document['circle'].bind('click', ctogreen) document['tux'].bind('mouseover', hoverover) document['tux'].bind('mouseleave', hoverout) 上述繪圖程式碼: from browser import window from browser import document # 將 Snap 轉為 Brython 物件 snap = window.Snap.new s = snap(\"#svgout1\") # 建立物件時, 同時設定 id 名稱 r = s.rect(10,10,100,100).attr({'id': 'rect'}) c = s.circle(100,100,50).attr({'id': 'circle'}) r.attr('fill', 'red') c.attr({ 'fill': 'blue', 'stroke': 'black', 'strokeWidth': 10 }) r.attr({ 'stroke': '#123456', 'strokeWidth': 20 }) s.text(180,100, '點按一下圖形').attr({'fill' : 'blue', 'stroke': 'blue', 'stroke-width': 0.2 }) g = s.group().attr({'id': 'tux'}) def hoverover(ev): g.animate({'transform': 's1.2r45,t180,20'}, 1000, window.mina.bounce) def hoverout(ev): g.animate({'transform': 's1r0,t180,20'}, 1000, window.mina.bounce) # callback 函式 def onSVGLoaded(data): #s.append(data) g.append(data) #g.hover(hoverover, hoverout ) g.text(300,100, '將滑鼠指向企鵝') # 利用 window.Snap.load 載入 svg 檔案 tux = window.Snap.load(\"https://chiamingyen.github.io/kmolab_data/files/Dreaming_tux.svg\", onSVGLoaded) g.transform('t180,20') # 與視窗事件對應的函式 def rtoyellow(ev): r.attr('fill', 'yellow') def ctogreen(ev): c.attr('fill', 'green') # 根據物件 id 綁定滑鼠事件執行對應函式 document['rect'].bind('click', rtoyellow) document['circle'].bind('click', ctogreen) document['tux'].bind('mouseover', hoverover) document['tux'].bind('mouseleave', hoverout) Other SVG library: https://github.com/duopixel/Method-Draw https://github.com/mozman/svgwrite","url":"./week11.html","tags":"40423224"},{"title":"Week8","text":"零件视频：https://youtu.be/dbJb6Fl12oo https://youtu.be/iQBfNWGhI5w","url":"./week8.html","tags":"40423224"},{"title":"test","text":"window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/Assembly1.stl', // data path path: './../data/madeleine/src/' // path to source directory from current html file }); }; window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/midterm1.csv\").read() fourbar_list = fourbar_data.splitlines() fourbar2_data = open(\"./../data/midterm2.csv\").read() fourbar2_list = fourbar2_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 4 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) ctx.strokeStyle = \"red\" for data in fourbar2_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./test.html","tags":"40423224"},{"title":"week7","text":"往fossil傳遞檔案，以及onshape參數繪圖 Part1. 全自動的 start.bat 近端的 fossil SCM + stunnel W7 起將要利用FOSSIL進行文字檔設計資料的版次管理. 協同產品設計課程有哪些文字檔案設計資料？ .py .md .bat reveal 與 pelican 的設計檔案 Part2. Solvespace , Onshape 的 one-link , fore-bar , eight-bar零件組圖，轉入V-rep 進行速度控制(動畫模擬) 將stl零組件展示在分組網誌，能否多stl零組件集中在一個 html業面，協同？ Part3. 期中報告與自評 Part_X1. Onshape Part Studio 建立教學，零件參數管理建立。 Onshape 零組件轉出 stl 檔為定位方便，軸與孔不可以理想完整配合。 須留餘隙，否則在轉出 stl 檔時將會將會與孔干涉，導致孔與軸疊合為一零件。 圓柱體總高不可小於或者等於直徑，導入 V-rep 會無法辨識其為柱狀零件(軸)。V-rep 其便是軸為抓取零件之長寬比。 Part_X2. sqlite3.exe 工具 sqlite vcp.fossil log in pw cap .schema user select login,pw cap from user 更改user ps(password) update user set up ='s' where login='****'; Part_X3. fossil clone uri vcp.fossil(Filename) fossil open ./ ../ ../vcp.fossil 進行改版 fossil add. fossil remote -url off fossil commit -m \"commit messenge\" fossil push https://user@192.168. . * key-in user passeword to complete push","url":"./week7.html","tags":"40423224"},{"title":"week6","text":"準備期中驗收 完成其他組件的v-rep做動模擬 完成課程遺漏部分，便於下週進行自評 2017-04-04_40423224_w6 from 鲜奶仙草冻 on Vimeo .","url":"./week6.html","tags":"40423224"},{"title":"week5","text":"fossil wiki首頁的使用及使one-link bar轉動 建立一個與project name同名的wiki，該wiki會成為首頁 認識fossil wiki的三種編譯方式-Fossil wiki，Markdown 以及Plain text 嘗試利用V-rep使solvespace做出的one-link bar，利用triangle mesh存檔後進行旋轉做動 做好one link bar 之後要利用export triangle mesh存成stl檔，在V-REP用inport打開此檔案，之後用edit>grouping/merging>divide selected shapes進行分解 將軸放至底部的子目錄，再將上蓋放置軸的子目錄進行固定，最後將軸變成馬達，即可讓簡易的one-link bar進行轉動 2017-03-28_40423224_w5 from 鲜奶仙草冻 on Vimeo .","url":"./week5.html","tags":"40423224"},{"title":"week4","text":"運營fossil製程的wiki 使用老師建立的新fossil，獲得管理權後加入其他組員 介紹altair的應力分析 認識Xming X-windows vnc remote desktop 2017-03-20_ 40423224﹍w4 from 鲜奶仙草冻 on Vimeo .","url":"./week4.html","tags":"40423224"},{"title":"week3","text":"介紹Altair及製作近端fossil 從 https://mde2al.kmol.info 進入新區域的wiki檢視每周進度 了解Altair的soildthinking 認識Altair的特色，其中包括檢測受力.受熱.流力.最小化資源利用.較為人性的快捷列 更改start的fossil路徑並且建立自己的近端fossil帳號密碼 2017-03-10_40423224_w3 from 鲜奶仙草冻 on Vimeo .","url":"./week3.html","tags":"40423224"},{"title":"week2","text":"使用py進行有效率的分組 使用ethercalc製作簡易的分組表格 認識cp950(大五碼) 使用py建立分組程序，並且挑出未被分類的學生 製作簡易連桿組 了解vrep起始抓點，在做stl檔的時候原點需跟物件拉開一定距離 課程視頻： Week2 from 鲜奶仙草冻 on Vimeo .","url":"./week2.html","tags":"40423224"},{"title":"week1","text":"介紹課程大綱 了解Blender 3dstudio maya之相關性 stunnel 的使用 http的proxy 在py語言中,;(分號)=註解 簡略介紹c語言與py的優劣與使用時機 利用cmd輸出ipconfig /all 查詢ip後 至stunnel>config>stunnel.conf\\,利用Scite找到http字串修改其ip 進入例如https://192.168.1.24/2017springvcp_hw/index 的協同區域,並且嘗試以anonymous（無名氏/遊客）的身份進入 利用vrep配合Scite打開的ttt檔完成做動模擬 課程視頻： Week1 from 鲜奶仙草冻 on Vimeo .","url":"./week1.html","tags":"40423224"}]};