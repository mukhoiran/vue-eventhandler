var app = new Vue({
  el:'#app',

  // <!-- =========== Mouse Onclick =========== -->
  // data:{
  //   message: '',
  // }

  // <!-- =========== Mouse Onclick with Methods =========== -->
  // methods: {
  //   message: function() {
  //      alert('Learning to use event click')
  //   }
  // }

  // <!-- =========== Mouse Onclick with Methods Parameter =========== -->
  methods: {
    message: function(content) {
       alert(content)
    }
  }
})
