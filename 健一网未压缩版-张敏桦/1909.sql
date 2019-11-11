/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50562
Source Host           : localhost:3306
Source Database       : 1909

Target Server Type    : MYSQL
Target Server Version : 50562
File Encoding         : 65001

Date: 2019-10-12 22:16:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for j1_list
-- ----------------------------
DROP TABLE IF EXISTS `j1_list`;
CREATE TABLE `j1_list` (
  `﻿sid` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `txt` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `all_sell` int(11) DEFAULT NULL,
  `comment` int(11) DEFAULT NULL,
  `have` varchar(255) DEFAULT NULL,
  `img_small` varchar(255) DEFAULT NULL,
  `img_min` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `huodong` varchar(255) DEFAULT NULL,
  `good_guige` varchar(255) DEFAULT NULL,
  `changjia` varchar(255) DEFAULT NULL,
  `xuanze` varchar(255) DEFAULT NULL,
  `leixing` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of j1_list
-- ----------------------------
INSERT INTO `j1_list` VALUES ('1', '1', '稳豪倍易型 血糖仪(血糖仪+采血笔+便携包） 颜色随机（黑绿银蓝红粉色）', '399', '55', '11373', '71', 'y', '1-1.jpg,1-2.jpg,1-3.jpg,1-4.jpg,1-5.jpg', 'min1.jpg', 'qs_list1.jpg', 'y', '血糖仪+采血笔+便携包', '强生(中国)医疗器材有限公司', '血糖试纸50片，文豪异形血糖仪', 'all');
INSERT INTO `j1_list` VALUES ('2', '2', '婴儿爽身粉 140g 白色', '22', '0', '8115', '83', 'n', null, null, 'qs_list11.jpg', 'n', null, null, null, 'all');
INSERT INTO `j1_list` VALUES ('3', '3', '稳豪型血糖仪试纸50片配针头 ', '228', '53', '1184', '805', 'y', '3-119682_0_720x720.jpg,3-119682_1_720x720.jpg', 'min3.jpg', 'qs_list6.jpg', 'y', '试纸50条+采血针', '美国丽康', '血糖试纸50片，文豪异形血糖仪', 'all');
INSERT INTO `j1_list` VALUES ('4', '4', '泰诺林', '21', '25', '1130', '89', 'y', '4-1.jpg,4-2.jpg,4-3.jpg,4-4.jpg,4-5.jpg', 'min4.jpg', 'qs_list3.jpg', 'n', '650mg×6片×3板/盒,铝塑板', '上海强生制药有限公司', '18片/盒', 'all');
INSERT INTO `j1_list` VALUES ('5', '5', '泰诺林', '18.5', '900', '700', '75', 'y', '5-1.jpg,5-2.jpg,5-3.jpg', 'min5.jpg', 'qs_list8.jpg', 'n', '100ml:3.2g。', '上海强生制药有限公司', '泰诺林100ml', 'all');
INSERT INTO `j1_list` VALUES ('6', '6', '稳豪倍优型血糖仪', '799', '65', '351', '4', 'y', '6-1.jpg,6-2.jpg,6-3.jpg,6-4.jpg', null, 'qs_list10.jpg', 'n', '血糖仪', '上海强生制药有限公司', '文豪异形血糖仪', 'all');
INSERT INTO `j1_list` VALUES ('7', '7', '婴儿爽身粉 70g ', '5', '0', '277', '15', 'n', null, null, 'qs_list2.jpg', 'n', '650mg×6片×4板/盒,铝塑板', '美国丽康', '19片/盒', 'all');
INSERT INTO `j1_list` VALUES ('8', '8', '（ONETOUCH）稳择型 血糖试纸（25条）*2', '169', '34', '145', '4', 'y', null, null, 'qs_list4.jpg', 'n', '100ml:3.3g。', '上海强生制药有限公司', '泰诺林101ml', 'all');
INSERT INTO `j1_list` VALUES ('9', '9', '稳豪型血糖仪试纸50片配针头 ', '228', '45', '1184', '805', 'y', null, null, 'qs_list6.jpg', 'y', '血糖仪', '上海强生制药有限公司', '文豪异形血糖仪', 'all');
INSERT INTO `j1_list` VALUES ('10', '10', '泰诺林', '21', '66', '1130', '89', 'y', null, null, 'qs_list3.jpg', 'n', '650mg×6片×5板/盒,铝塑板', '上海强生制药有限公司', '20片/盒', 'all');
INSERT INTO `j1_list` VALUES ('11', '11', '泰诺林', '18.5', '77', '700', '75', 'y', null, null, 'qs_list8.jpg', 'n', '100ml:3.4g。', '美国丽康', '泰诺林102ml', 'all');
INSERT INTO `j1_list` VALUES ('12', '12', '稳豪倍优型血糖仪', '799', '44', '351', '4', 'y', null, null, 'qs_list10.jpg', 'n', '血糖仪', '上海强生制药有限公司', '文豪异形血糖仪', 'all');
INSERT INTO `j1_list` VALUES ('13', '13', '婴儿爽身粉 70g ', '5', '0', '277', '15', 'n', null, null, 'qs_list2.jpg', 'n', '650mg×6片×6板/盒,铝塑板', '上海强生制药有限公司', '21片/盒', 'all');
INSERT INTO `j1_list` VALUES ('14', '14', '（ONETOUCH）稳择型 血糖试纸（25条）*2', '169', '10', '145', '4', 'y', null, null, 'qs_list4.jpg', 'n', '100ml:3.5g。', '上海强生制药有限公司', '泰诺林103ml', 'all');

-- ----------------------------
-- Table structure for j1_reg
-- ----------------------------
DROP TABLE IF EXISTS `j1_reg`;
CREATE TABLE `j1_reg` (
  `﻿userid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `userphone` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `useremail` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `passagain` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿userid`,`userphone`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of j1_reg
-- ----------------------------
INSERT INTO `j1_reg` VALUES ('1', '1', '13078030777', 'admin', '1634306447', 'admin', 'admin');
INSERT INTO `j1_reg` VALUES ('2', null, '13078030746', '13078030746', null, 'q12345', null);
INSERT INTO `j1_reg` VALUES ('3', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('4', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('5', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('6', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('7', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('8', null, '13012012012', '13012012012', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('9', null, '13824651769', '13824651769', null, 'q22222', null);
INSERT INTO `j1_reg` VALUES ('10', null, '13421777900', '13421777900', null, 'w12345', null);

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `﻿id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '西服女时尚休闲韩版外套春秋英伦风网红2019职业套装OL气质', '255', '1223', '夹心粉');
INSERT INTO `list` VALUES ('2', '2019春秋装新款时尚洋气网红女神衬衫加背心气质两件套装裙', '214', '56', '活力蓝');
INSERT INTO `list` VALUES ('3', '2019件套春装裙女毛呢两时尚2018冬季新款子套装连衣裙潮', '199', '789', '魅力灰');
INSERT INTO `list` VALUES ('4', '西服女时尚休闲韩版外套春秋英伦风网红2020职业套装OL气质', '166', '56', '夹心粉');
INSERT INTO `list` VALUES ('5', '2020春秋装新款时尚洋气网红女神衬衫加背心气质两件套装裙', '138', '56', '活力蓝');
INSERT INTO `list` VALUES ('6', '2019件套春装裙女毛呢两时尚2019冬季新款子套装连衣裙潮', '79', '47', '魅力灰');
INSERT INTO `list` VALUES ('7', '西服女时尚休闲韩版外套春秋英伦风网红2021职业套装OL气质', '554', '888', '夹心粉');
INSERT INTO `list` VALUES ('8', '2021春秋装新款时尚洋气网红女神衬衫加背心气质两件套装裙', '320', '877', '活力蓝');
INSERT INTO `list` VALUES ('9', '2019件套春装裙女毛呢两时尚2019冬季新款子套装连衣裙潮', '88', '47', '魅力灰');
INSERT INTO `list` VALUES ('10', '西服女时尚休闲韩版外套春秋英伦风网红2021职业套装OL气质', '574', '888', '夹心粉');
INSERT INTO `list` VALUES ('11', '2021春秋装新款时尚洋气网红女神衬衫加背心气质两件套装裙', '320', '877', '活力蓝');
INSERT INTO `list` VALUES ('12', '2019件套春装裙女毛呢两时尚2019冬季新款子套装连衣裙潮', '99', '47', '魅力灰');
INSERT INTO `list` VALUES ('13', '西服女时尚休闲韩版外套春秋英伦风网红2021职业套装OL气质', '530', '888', '夹心粉');
INSERT INTO `list` VALUES ('14', '2021春秋装新款时尚洋气网红女神衬衫加背心气质两件套装裙', '322', '877', '活力蓝');

-- ----------------------------
-- Table structure for taobao
-- ----------------------------
DROP TABLE IF EXISTS `taobao`;
CREATE TABLE `taobao` (
  `﻿id` varchar(255) DEFAULT NULL,
  `txt` varchar(255) DEFAULT NULL,
  `people` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `adr` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of taobao
-- ----------------------------
INSERT INTO `taobao` VALUES ('1', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('2', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('3', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg');
INSERT INTO `taobao` VALUES ('4', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('5', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('6', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg');
INSERT INTO `taobao` VALUES ('7', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('8', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('9', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg,https://gd2.alicdn.com/imgextra/i4/2560405845/O1CN018TTaqT1t33YsChKLq');
INSERT INTO `taobao` VALUES ('10', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('11', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('12', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg,https://gd2.alicdn.com/imgextra/i4/2560405845/O1CN018TTaqT1t33YsChKLq');
INSERT INTO `taobao` VALUES ('13', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('14', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('15', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg,https://gd2.alicdn.com/imgextra/i4/2560405845/O1CN018TTaqT1t33YsChKLq');
INSERT INTO `taobao` VALUES ('16', '【爱尚】maje连衣裙女春夏新款气质雪纺高圆圆同款v领显瘦中长裙', '126', '900', '不知的呀', '法国', 'https://gd4.alicdn.com/imgextra/i2/560763825/O1CN01Y32Jg41e7tTIzuQT0_!!560763825.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/560763825/O1CN015lC3al1e7tTMT3S9Y_!!560763825.jpg_400x400.jpg');
INSERT INTO `taobao` VALUES ('17', '格子鹿皮绒连衣裙2019初秋新款背带裙女秋冬季背心裙小香风马甲裙', '20', '95', '侯贝贝', '广东广州', 'https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01Nmhi3Z1T8OAGpkrGR_!!1876762337.jpg,https://gd4.alicdn.com/imgextra/i4/1876762337/O1CN01QLHklb1T8OAH2OBDP_!!1876762337.jpg,');
INSERT INTO `taobao` VALUES ('18', '【秀琴日代】maje19女儿们的恋爱郑爽同款粉色喇叭袖雪纺连衣裙', '56', '570', '爱情时之家', '澳门', 'https://gd3.alicdn.com/imgextra/i3/2560405845/O1CN01TPuirq1t33YokmyAU_!!2560405845.jpg_400x400.jpg,https://gd4.alicdn.com/imgextra/i4/2560405845/O1CN01zp25jJ1t33YteKBj1_!!2560405845.jpg,https://gd2.alicdn.com/imgextra/i4/2560405845/O1CN018TTaqT1t33YsChKLq');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `psw` varchar(20) NOT NULL,
  `regtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('3', 'admin', '111111', '2019-09-21 14:19:56');
INSERT INTO `userinf` VALUES ('25', 'dd', '222', '2019-09-21 16:57:59');
INSERT INTO `userinf` VALUES ('26', 'qqww', 'qqww', '2019-09-21 20:29:01');
INSERT INTO `userinf` VALUES ('27', 'aa', 'aa', '2019-09-21 20:39:34');
INSERT INTO `userinf` VALUES ('28', 'zz', 'zz', '2019-09-21 20:40:31');
INSERT INTO `userinf` VALUES ('29', 'ff', 'ff', '2019-09-21 21:08:12');
INSERT INTO `userinf` VALUES ('30', 'rr', 'rr', '2019-09-21 21:09:13');
INSERT INTO `userinf` VALUES ('31', 'cc', 'cc', '2019-09-21 21:10:18');
SET FOREIGN_KEY_CHECKS=1;
