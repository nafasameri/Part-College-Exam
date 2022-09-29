/*
 Navicat Premium Data Transfer

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 140005 (140005)
 Source Host           : localhost:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140005 (140005)
 File Encoding         : 65001

 Date: 29/09/2022 18:04:53
*/


-- ----------------------------
-- Sequence structure for Message_MessageID_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Message_MessageID_seq";
CREATE SEQUENCE "public"."Message_MessageID_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for Message
-- ----------------------------
DROP TABLE IF EXISTS "public"."Message";
CREATE TABLE "public"."Message" (
  "MessageID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "MessageBody" varchar(300) COLLATE "pg_catalog"."default",
  "MessageDate" varchar(50) COLLATE "pg_catalog"."default",
  "ReplyID" int4
)
;

-- ----------------------------
-- Records of Message
-- ----------------------------
INSERT INTO "public"."Message" OVERRIDING SYSTEM VALUE VALUES (1, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', '1401-7-6 11:2:41', NULL);
INSERT INTO "public"."Message" OVERRIDING SYSTEM VALUE VALUES (2, 'ghfjkdlلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', '1401-7-6 11:5:4', NULL);
INSERT INTO "public"."Message" OVERRIDING SYSTEM VALUE VALUES (3, 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', '1401-7-6 11:5:23', 1);
INSERT INTO "public"."Message" OVERRIDING SYSTEM VALUE VALUES (4, 'ghfjkdl', '1401-7-6 18:4:28', 1);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Message_MessageID_seq"
OWNED BY "public"."Message"."MessageID";
SELECT setval('"public"."Message_MessageID_seq"', 4, true);

-- ----------------------------
-- Auto increment value for Message
-- ----------------------------
SELECT setval('"public"."Message_MessageID_seq"', 4, true);

-- ----------------------------
-- Primary Key structure for table Message
-- ----------------------------
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_pkey" PRIMARY KEY ("MessageID");

-- ----------------------------
-- Foreign Keys structure for table Message
-- ----------------------------
ALTER TABLE "public"."Message" ADD CONSTRAINT "FK_Reply" FOREIGN KEY ("ReplyID") REFERENCES "public"."Message" ("MessageID") ON DELETE NO ACTION ON UPDATE NO ACTION;
