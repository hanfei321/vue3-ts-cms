import axios from 'axios'

axios
  .get('http://152.136.185.210:7878/api/hy66/home/multidata', {
    params: ''
  })
  .then((res) => {
    console.log(res.data)
  })
