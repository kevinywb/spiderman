export default {
  timeout: null,
  intervals: [],
  lang: 'zhCN',
  userinfo: null,
}

function onLoad() {
  if (typeof (Storage) !== 'undefined' && localStorage.getItem('gerapy-lang') !== 'undefined') {
    return localStorage.getItem('gerapy-lang');
  } else {
    return 'zhCN'
  }
}
