# 跨域问题如何解决

1. JSONP
2. CORS（Cross-Origin-Resource-Share，跨域资源共享），由服务端设置响应头通过浏览器的同源策略限制
   - Access-Control-Allow-Origin: *;
   - Access-Control-Allow-Methods: *;
   - Access-Control-Allow-Headers: *;
   - Access-Control-Allow-Credentials: true;