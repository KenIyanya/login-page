new Vue ({
  el: '#app',
  data() {
    return {
      email: '',
      password: '',
      showemail: '',
      showpass: ''
    }
  },
    methods: {
          show() {
            this.showemail = 'Email: ' + this.email
            this.showpass = 'Password: ' + this.password
          }
  }
})