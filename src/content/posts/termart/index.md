---
title: TermArt鈥斺€旀妸鏂囧瓧鍙樻垚缁堢鍍忕礌鐢荤殑 CLI 宸ュ叿
published: 2026-05-17
description: 涓€涓?Python 鍐欑殑灏忓伐鍏?鑳芥妸鏂囧瓧/鍥剧墖/GIF 杞垚缁堢閲岀殑褰╄壊鏂瑰潡鐢汇€侫SCII 鎵嬪啓鍍忕礌瀛? O 鏄柟鐨? P 鏄洿鐨勩€?image: ./cover.jpg
tags: [CLI, Python, 缁堢, Banner, ASCII Art]
category: 宸ュ叿
draft: false
---

## 鏄粈涔?
`termart` 鏄竴涓粓绔懡浠よ宸ュ叿锛屾妸鏂囧瓧銆佸浘鐗囥€丟IF 杞垚缁堢閲屾紓浜殑褰╄壊鏂瑰潡鐢汇€?
璺?`figlet` 涓嶅悓锛屽畠涓嶆槸鐢ㄥ瓧绗︽嫾瀛楋紝鑰屾槸鐢?**Unicode 鍗婂潡瀛楃 (鈻€)** 閰嶅悎 **ANSI 鐪熷僵鑹?*鍓嶆櫙/鑳屾櫙鑹诧紝涓€涓瓧绗﹀氨鑳芥樉绀轰袱绉嶉鑹诧紝鑷甫闃村奖绔嬩綋鎰熴€?
```bash
pip install Pillow
python termart.py --text "HELLO" --block
```

## 涓轰粈涔堝仛

涔嬪墠鍋氳繃鍑犱釜寮€婧愰」鐩紙mcphub銆乺eqcli銆乸rojcli锛夛紝閮戒笉澶悊鎯炽€傚悗鏉ョ湅鍒?opencode 鐨勭粓绔?Logo锛岄偅绉嶇敤 鈻€鈻勨枅 鏂瑰潡鎷煎嚭鏉ョ殑鏁堟灉寰堟湁鎰忔€濓紝灏辨兂鑷繁鍋氫竴涓洿閫氱敤鐨勩€?
鏍稿績鎬濊矾锛?- **ASCII 瀛楁瘝/鏁板瓧/绗﹀彿**锛氭墜鍐?5脳6 鍍忕礌瀛楀舰锛?4 涓瓧绗︺€侽 涓嶆槸鍦嗙殑锛屾槸鏂圭殑 鈻★紱P 娌℃湁寮洸绗旂敾锛屽氨鏄珫绾垮姞鐭╁舰銆?- **涓枃瀛楃**锛氱敤 TrueType 瀛椾綋娓叉煋 鈫?浜屽€煎寲 鈫?鏂瑰潡銆傚洜涓哄嚑鍗冧釜姹夊瓧涓嶅彲鑳芥墜鍐欍€?
## 鏁堟灉

### 鍧楁ā寮忥紙鎵嬪啓鍍忕礌瀛楋級

```bash
python termart.py --text "OPQ" --block
```

姣忎釜瀛楃 5 鍒楀锛孫 鏄柟妗嗭紝P 鏄珫绾?鏂瑰潡锛孮 甯﹀熬宸淬€傛墍鏈夌瑪鐢婚兘鏄洿鐨勶紝娌℃湁鏇茬嚎銆?
### 褰╄櫣娓愬彉

```bash
python termart.py --text "RAINBOW" --block --rainbow
```

绾㈡榛勭豢闈掕摑绱紝姣忓瓧涓€涓鑹诧紝骞虫粦杩囨浮銆?
### 涓枃鏀寔

```bash
python termart.py --text "浣犲ソ涓栫晫" --block
```

鑷姩妫€娴?CJK 瀛楃锛屽垏寰蒋闆呴粦 / 瀹嬩綋娓叉煋銆?
### 鍥剧墖杞粓绔?
```bash
python termart.py photo.jpg
```

鐢ㄥ崐鍧楀瓧绗?+ LANCZOS 骞虫粦缂╂斁锛屽湪缁堢閲岀湅鐓х墖銆?
### GIF 鍔ㄥ浘

```bash
python termart.py animation.gif
```

閫愬抚娓叉煋锛屽湪缁堢閲屾挱 GIF銆?
## 鍏ㄩ儴鍙傛暟

| 鍙傛暟 | 璇存槑 |
|------|------|
| `--text "..."` | 瑕佹覆鏌撶殑鏂囧瓧锛屾敮鎸?`\n` 澶氳 |
| `--block` | 鍧?鍍忕礌妯″紡锛堥粯璁ゅ钩婊戞姉閿娇锛?|
| `--color "#ff6b9d"` | 鏂囧瓧棰滆壊 |
| `--gradient "#f00,#0f0,#00f"` | 娓愬彉鑹?|
| `--rainbow` | 褰╄櫣棰勮 |
| `--width 60` | 杈撳嚭瀹藉害 |
| `-W 8` | 姣忓瓧鍗犲嚑鍒楋紙鍧楁ā寮忥級 |
| `--align center` | 瀵归綈锛歭eft/center/right |
| `--pad 2` | 涓婁笅鐣欑櫧 |
| `-m full` | 鍏ㄥ潡 鈻?妯″紡 |
| `--list-glyphs` | 鏌ョ湅鎵€鏈夋墜鍐欏瓧绗?|
| `--stdin` | 绠￠亾杈撳叆 |
| `-o file.txt` | 杈撳嚭鍒版枃浠?|
| `--no-color` | 鍘昏壊绾枃鏈?|

## 瀹夎

```bash
git clone https://github.com/GODONG-DN/termart.git
cd termart
pip install Pillow
python termart.py --text "HELLO" --block
```

鎴栬€呴€氳繃 pip 瀹夎锛?
```bash
pip install git+https://github.com/GODONG-DN/termart.git
termart --text "HELLO" --block
```

## 鏈€鍚?
浠ｇ爜鍦?[GitHub](https://github.com/GODONG-DN/termart)锛岃寰楁湁鐢ㄧ殑璇濈偣涓?Star銆?
娆㈣繋鎻?Issue / PR銆?