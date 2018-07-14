import AV from 'leancloud-storage'

let APP_ID = 'fubRKob5ombKpfC0jqcYo4d5-gzGzoHsz';
let APP_KEY = 'LL25S9QYDBzrNtUAqPwbpawD';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV
