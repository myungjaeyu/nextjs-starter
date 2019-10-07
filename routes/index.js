const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ 
  name: 'reduxProfile', 
  pattern: '/rp', 
  page: '/redux/profile' 
})

router.add({
  name: 'axiosProfile',
  pattern: '/ap/:username',
  page: '/axios/profile'
})

module.exports = router