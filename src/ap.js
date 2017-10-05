var Slider = new Vue({
    el: '#app',
    data: function data() {
        return {
            slides: ['one', 'two', 'three', 'four','fife','six','seven'],
            value: '',
            counter: 1,
            size:600
        };
    },

    methods: {
        right: function right() {//двигаем вправо
          //  console.log(this.counter);
            if (this.counter < this.slides.length) {
                this.counter += 1;
                this.value -= this.size;
            }
        },
        left: function left() {//двигаем влево
            //console.log(this.counter);
            if (this.counter <= this.slides.length && this.counter > 1) {
                this.counter -= 1;
                this.value += this.size;
            }
        },
        addSlide() //добавляем
        {
                this.slides.push(
              'Slide name X'
            
  )},removeSlide() {//удаляем
        this.slides.pop()
      }

    }
});
