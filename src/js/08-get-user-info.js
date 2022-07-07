;(function () {
  'use strict'
  var fetch = window.fetch
  initUserProfile()

  function initUserProfile () {
    'use strict'
    var el = document.querySelector('#username')
    fetch && fetch('/v1/api/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-csrf-token': '<%= csrf %>',
        // 'Authorization': 'Bearer ' + token
      },
    }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('err', response)
      }
    }).then((json) => {
      el.textContent = 'Hi, ' + json.name + '!'
      el.title = json.email
    }).catch((err) => {
      console.log(err)
    })
  }
})()
