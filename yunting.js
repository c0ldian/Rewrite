/******************************

脚本功能：云听 全国电台/有声听书——解锁VIP
下载地址：https://t.cn/A6ouQ21g
软件版本：6.45.5
脚本作者：彭于晏💞
更新时间：2023-3-8
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************


[rewrite_local]

^http[s]?:\/\/(getway|ytapi)\.radio\.cn url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/yunting.js

[mitm]

hostname = *.radio.cn

*************************************/

