export default{
    
    
        // baseURL: 'http://10.64.83.133/twjyh/index.php?s=',
        method: 'POST',
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
    
    
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    
    
        withCredentials: true, // default
    
    
        responseType: 'json', // default
    
    
        //将upload事件注释掉，防止跨域状态下发起option请求
    
        // onUploadProgress: function(progressEvent) {
        //     // Do whatever you want with the native progress event
        // },
    
    
        // onDownloadProgress: function(progressEvent) {
        //     // Do whatever you want with the native progress event
        // },
    
    
        maxContentLength: 2000,
    
    
        validateStatus: function(status) {
            return status >= 200 && status < 300; // default
        },
    
    
        maxRedirects: 5, // default
    }