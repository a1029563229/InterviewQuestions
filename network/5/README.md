# 介绍下如何实现 token 加密

JWT 加密：

1. 需要一个 secret（随机数）；
2. 后端利用 secret 和加密算法（如：HMAC-SHA256）对 payload（如账号密码）生成一个字符串（token），返回前端；
3. 前端每次 request 在 header 中带上 token;
4. 后端用同样的算法解密；