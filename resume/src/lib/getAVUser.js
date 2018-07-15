import AV from './leancloud.js'

export default function(user){
  var {id,attributes:{username}} = user || AV.User.current() || {attributes: {}};
  return {
    id: id || '',
    username: username || ''
  }
}
