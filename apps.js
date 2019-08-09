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
  // methods: {
  //   message: function(content) {
  //      alert(content)
  //   }
  // }

  // <!-- =========== Event on Enter =========== -->
  // methods:{
  //   message: function(){
  //     alert('You click enter button');
  //   }
  // }

  //<!-- =========== event on some keyboard =========== -->
  // data:{
  //   result:''
  // },
  // methods:{
  //   enter: function(){ this.result = 'Enter button' },
  //   esc: function(){ this.result = 'Escape button' },
  //   space: function(){ this.result = 'Space button'},
  //   up: function(){ this.result = 'Up button' },
  //   down: function(){ this.result = 'Down button' },
  //   right: function(){ this.result = 'Right button' },
  //   left: function(){ this.result = 'Left button' }
  // }

  // <!-- =========== mouse left click =========== -->
  data: {
    result: ''
  },
  methods:{
    left: function(){ this.result = 'Left click'}
  }
})
