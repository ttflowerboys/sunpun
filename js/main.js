var Game = {
  doc: null,
  interface_url: 'http://yunhuodong.net/wx/event/common/webajax.ashx',
  final_pic: '', // 最终图片element
  city: '',
  isCityOnly: false,
  isFirstOpen: true,
  pageFrom: '1',
  selectedCoverIndex: 1,
  selectedProduct: 0,
  mySwpier: null,
  userName: '',
  isSwiperOk: false,
  nowQuestionIndex: 0,
  isAnimating: false,
  finalResult: [],
  places: [{id: 0, tag: 'golden', name: ''}, {id: 1, tag: 'fra', name: '法国'}, {id: 2, tag: 'aus', name: '澳大利亚'}, {
    id: 3,
    tag: 'jap',
    name: '日本'
  },
    {id: 4, tag: 'sgp', name: '新加坡'}, {id: 5, tag: 'thai', name: '泰国'}, {id: 6, tag: 'span', name: '西班牙'},
    {id: 7, tag: 'mac', name: '中国澳门'},
    {id: 8, tag: 'hk', name: '中国香港'}, {id: 9, tag: 'ita', name: '意大利'}, {id: 10, tag: 'usa', name: '美国'},
    {id: 11, tag: 'ae', name: '阿联酋'}],
  products: [
    {
      name: '产品1的描述文字',
      picUrl: 'draw/' + 'p4_product_1.png'
    },
    {
      name: '产品2的描述文字',
      picUrl: 'draw/' + 'p4_product_2.png'
    },
    {
      name: '产品3的描述文字',
      picUrl: 'draw/' + 'p4_product_3.png'
    },
    {
      name: '产品4的描述文字',
      picUrl: 'draw/' + 'p4_product_4.png'
    }
  ],
  links: {
    link1: [
      'https://www.bulgari.cn/zh-cn/storelocator?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorFiorever356224&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/storelocator?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorSerpentibag287194&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/storelocator?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorDivaCL355889&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/storelocator?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorLucea103123&utm_campaign=CNY2019'
    ],
    link2: [
      'https://www.bulgari.cn/zh-cn/356223-e.html?utm_source=H5Page&utm_medium=banner&utm_content=Fiorever356223&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/287194-e.html?utm_source=H5Page&utm_medium=banner&utm_content=Serpentibag287194&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/355889-e.html?utm_source=H5Page&utm_medium=banner&utm_content=DivaCL355889&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/103123-e.html?utm_source=H5Page&utm_medium=banner&utm_content=Lucea103123&utm_campaign=CNY2019'
    ],
    link2_usa: [
      'https://www.bulgari.com/en-us/products/356223-e.html?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorFiorever356224US&utm_campaign=CNY2019',
      'https://www.bulgari.com/en-us/products/287194-e.html?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorSerpentibag287194US&utm_campaign=CNY2019',
      'https://www.bulgari.com/en-us/products/355889-e.html?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorDivaCL355889US&utm_campaign=CNY2019',
      'https://www.bulgari.com/en-us/products/103123-e.html?utm_source=H5Page&utm_medium=banner&utm_content=StoreLocatorLucea103123US&utm_campaign=CNY2019'
    ],
    product: [
      'https://www.bulgari.cn/zh-cn/fiorever-jewellery-collection?utm_source=H5Page&utm_medium=banner&utm_content=FioreverCollectionPageLink&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/leather-goods/collections/serpenti.html?utm_source=H5Page&utm_medium=banner&utm_content=SerpentiGridLink&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/divas-dream?utm_source=H5Page&utm_medium=banner&utm_content=DivasDreamCollectionPageLink&utm_campaign=CNY2019',
      'https://www.bulgari.cn/zh-cn/lvcea-2018?utm_source=H5Page&utm_medium=banner&utm_content=LvceaCollectionPageLink&utm_campaign=CNY2019'
    ]
  },
  init: function () {
    this.doc = HYPE.documents[hype_name];
    var queryObj = Utils.getQueryObj();
    if (queryObj.city) {
      this.city = queryObj.city;
      this.isCityOnly = true;
    }
    if (queryObj.pagefrom) {
      this.pageFrom = queryObj.pagefrom;
    }
    continueLoading();
    this.initPage1();
  },
  initPage1: function () {
    var self = this;
    $('#txt_name').off('input').on('input', function () {
      var name = $(this).val();
      var length = Utils.getStrLength(name);
      console.log(length);
      if (length > 14) {
        name = Utils.cutStr(name, 12);
        $(this).val(name);
      }
      self.userName = name;
      $('#txt_message').text($('body').height() + ',' + $(window).height() + ',' + $('.wrapper').height());
    });

    $('#txt_name').off('blur').on('blur', function () {
      console.log('blur');
      $('body').scrollTop(0);
    });
    track_buttons('进入姓名页');
  },
  start: function () { // 进入国家聚合页或者对应参数的国家页面
    if (this.userName.replace(/ /g, '')) {
      $('#txt_name').blur();
      if (this.city) {
        this.gotoCity(this.city);
      } else {
        this.doc.showSceneNamed('scene_main', this.doc.kSceneTransitionCrossfade, 0.8);
      }
    }
  },

  initPageMain: function () {
    if (this.isFirstOpen) {
      track_buttons('进入国家聚合页');
      setTimeout(function () {
        $('#p2_tip').fadeOut(500);
      }, 3000);
    } else {
      $('#p2_tip').hide();
    }

    this.isFirstOpen = false;


    if (!this.mySwiper) {
      var list = '';
      for (var i = 0; i < this.places.length; i++) {
        list += '<div class="swiper-slide city_' + this.places[i].tag + '" onclick="Game.gotoCity(\'' + this.places[i].tag + '\')">' +
          '<img src="bvlgari.hyperesources/p2_gate_' + this.places[i].tag + '.png" class="main-img">' +
          '</div>'
      }

      var html =
        '<div class="swiper-container">' +
        '<div class="swiper-wrapper"> ' +
        list +
        '</div>' +
        '</div>' +
        '<div class="swiper-pagination" id="pagination"></div>';

      $('#swiper_container').html(html);

      this.initSwiper();
    }

  },
  gotoCity: function (city) { // 跳转到对应的城市页
    if (city !== 'golden') {
      this.city = city;
      $('.city_' + city).addClass('gate_active'); // 给被点击的门添加变大的效果
      setTimeout(function () {
        this.doc.showSceneNamed('scene_city_' + city, this.doc.kSceneTransitionCrossfade, 0.5);
        setTimeout(function () {
          $('.city_' + city).removeClass('gate_active'); // 去除门的变大效果
        }, 500)
      }.bind(this), 500);
    }
    console.log(city);
  },
  initCity: function (scene) { // 初始化城市页问题及选项
    var city = scene.split('_')[2];

    track_buttons('进入国家_' + city);

    var mainQuestion = questions[city];
    var containerWidth = $('#question_container_' + city).width();
    var ulF = '<ul style="position: absolute;width:' + containerWidth * 3 + 'px; height: 100%; list-style: none; margin: 0; padding: 0">';
    var ulE = '</ul>';
    var li_html = '';
    var rand = Math.floor(Math.random() * mainQuestion.length);
    var nowQuestion = mainQuestion[rand];
    for (var i = 0; i < nowQuestion.length; i++) {

      var radio_html = '';
      for (var j = 0; j < nowQuestion[i].answers.length; j++) { // radio的HTML
        radio_html +=
          '<div style="width: 100%; display: block; padding: 3px 10px;">' +
          '<input type="radio" data-tags="' + city + '_' + rand + '_' + i + '_' + j + '" name="radioAnswer_' + city + (i + 1) + '" id="radio_' + city + 'q_' + (i + 1) + '_' + (j + 1) + '" value="' + nowQuestion[i].answers[j].value + '">' +
          '<label class="siyuan-font" for="radio_' + city + 'q_' + (i + 1) + '_' + (j + 1) + '">' + nowQuestion[i].answers[j].question + '</label>' +
          '</div>';
      }

      var _li = '<li style="position: relative; width: ' + containerWidth + 'px;height: 100%; float: left;overflow: hidden;">' +
        '<span style="position: absolute; left:0;top: 0;" class="siyuan-font">' + (i + 1) + '.&nbsp;</span><p class="siyuan-font" style="padding-left: 11px;">' + nowQuestion[i].title + '</p>' +
        radio_html +
        '</li>'
      li_html += _li;
    }

    $('#question_container_' + city).html(ulF + li_html + ulE);
    $('.star').hide();
    $('#p3_star_' + city + '_1').show();
    this.nowQuestionIndex = 0;
    this.finalResult = [];
    setTimeout(function () {
      $($('#question_container_' + city).find('input:radio[value="1"]')[0]).prop('checked', 'checked');
      $($('#question_container_' + city).find('input:radio[value="1"]')[1]).prop('checked', 'checked');
      $($('#question_container_' + city).find('input:radio[value="1"]')[2]).prop('checked', 'checked');
    }, 200);

  },

  gotoNextQuestion: function (scene) {
    var self = this;
    if (!this.isAnimating) {
      this.isAnimating = true;
      var city = scene.split('_')[2];
      var containerWidth = $('#question_container_' + city).width();
      var containerHeight = $('#question_container_' + city).height();
      var val = $('#question_container_' + city).find('input[name="radioAnswer_' + city + (this.nowQuestionIndex + 1) + '"]:checked').data('tags').split('_');
      var nowCityQuestions = questions[val[0]]; // 当前国家下的题目集合
      var nowQuestionList = nowCityQuestions[parseInt(val[1])]; // 当前题目集合中选中的3道题目数组
      var nowQuestion = nowQuestionList[parseInt(val[2])].answers; // 当前在做的题目
      var nowAnswer = nowQuestion[parseInt(val[3])]; // 当前选择的答案

      var result = {};

      switch (this.nowQuestionIndex) {
        case 0:
          var tags = nowAnswer.tags.split('|');
          var rand = Math.floor(Math.random() * tags.length);
          result = {
            text: nowAnswer.text,
            tag: 'draw/' + 'p4_tag_' + (parseInt(val[3]) + 1) + '_' + (rand + 1) + '.png'
          };
          break;
        case 1:
          result = {
            text: nowAnswer.text.split('|')
          };
          break;
        case 2:
          var rand = Math.floor(Math.random() * this.products.length);
          self.selectedProduct = rand;
          console.log(nowAnswer);
          result = {
            text: nowAnswer.text.split('|')[rand],
            pic: this.products[rand].picUrl
          };
          break;
      }

      this.finalResult.push(result);

      $('.star').hide();
      $('#item_' + city + '_' + (this.nowQuestionIndex + 1)).find('.dark').fadeOut(1000);
      if (city === 'hk') {
        $('#item_' + city + '_' + (this.nowQuestionIndex + 1) + '_2').find('.dark').fadeOut(1000);
        $('#item_' + city + '_' + (this.nowQuestionIndex + 1) + '_2').find('.light').fadeIn(1000);
      }
      $('#item_' + city + '_' + (this.nowQuestionIndex + 1)).find('.light').fadeIn(1000, function () {
        self.isAnimating = false;
      });
      if (this.nowQuestionIndex < 2) {
        $('#question_container_' + city).find('ul').animate({left: -containerWidth * (this.nowQuestionIndex + 1)}, 500, function () {
          self.nowQuestionIndex += 1;
          $('#p3_star_' + city + '_' + (self.nowQuestionIndex + 1)).show();
          if (self.nowQuestionIndex === 2) {
            $('.btn_next').hide();
            $('.btn_complete').show();
          }
        });
      } else {
        $('#question_container_' + city).fadeOut(500);
        $('.btn_complete').fadeOut(500);
        setTimeout(function () {
          $('.redbag_container').fadeIn(1000);
        }.bind(this), 1500);

      }

      console.log(this.finalResult);
    }
  },

  addFullFireClass: function (isAdd) {
    if (isAdd) {
      $('.full-fire').addClass('redbag-full-fire');
    } else {
      $('.full-fire').removeClass('redbag-full-fire');
    }
  },

  addPigClass: function (index) {
    var $pig = $('.gong-pig');
    if (index === 1) {
      $pig.removeClass('pig-run');
      $pig.addClass('pig-left');
    }
    if (index === 2) {
      $pig.removeClass('pig-left');
      $pig.removeClass('pig-right');
      $pig.addClass('pig-run');
    }
    if (index === 3) {
      $pig.removeClass('pig-run');
      $pig.addClass('pig-right');
    }

    if (index === 4) {
      $pig.removeClass('pig-left');
      $pig.removeClass('pig-right');
      $pig.removeClass('pig-run');
    }

  },

  initResult: function () { // 最终结果绘图

    var self = this;
    if ($(window).height() < 724) {
      $('#result').css('height', ($('#result').height() + ((724 - $(window).height()) / 2)));
    }
    if (this.pageFrom === '1' || this.pageFrom === '2' || this.pageFrom === '3') {
      $('#info_1').show();
      $('#info_2').hide();
      $('#info_image_1').attr('src', 'qrcode/' + (self.selectedProduct + 1) + '/p4_info_1_1_' + (self.selectedProduct + 1) + '.png');
      $('#info_image_2').attr('src', 'qrcode/' + (self.selectedProduct + 1) + '/p4_info_1_2_' + (self.selectedProduct + 1) + '.png');
    } else {
      $('#info_1').hide();
      $('#info_2').show();
    }

    track_buttons('进入结果页');

    if (this.finalResult.length > 0) {
      var canvas = document.createElement('canvas');
      canvas.width = 670;
      canvas.height = 1124;
      var context = canvas.getContext('2d');

      var main_bg = new Image();
      main_bg.src = 'draw/' + 'main_bg.jpg';
      main_bg.onload = function () {
        context.drawImage(main_bg, 0, 0, canvas.width, canvas.height);
        var bg = new Image();
        bg.src = 'draw/' + 'p4_card_bg_' + self.city + '.jpg';
        bg.onload = function () {
          context.drawImage(bg, (canvas.width - 614) / 2, (canvas.height - 1068) / 2, 614, 1068); // 画最下面的背景图
          var productImage = new Image();
          productImage.src = self.finalResult[2].pic;
          productImage.onload = function () {
            context.drawImage(productImage, (canvas.width - 614) / 2, (canvas.height - 1068) / 2, 614, 1068); // 画产品图

            var tagImage = new Image();
            tagImage.src = self.finalResult[0].tag;
            tagImage.onload = function () {
              context.drawImage(tagImage, (canvas.width - 498) / 2, canvas.height / 2 + 90, 498, 127); // 画四字成语图

              // 画用户名
              context.save();
              context.textAlign = 'center';
              context.font = 'bold 36px "黑体", Helvetica, Arial, sans-serif';
              context.fillStyle = '#c27a48';
              context.fillText(self.userName, canvas.width / 2, canvas.height / 2 + 30, 200);
              context.restore();

              // 画四句话
              context.save();
              context.textAlign = 'center';
              context.font = 'normal 20px "SimHei", "黑体", Helvetica, Arial, sans-serif';
              context.fillStyle = '#c37d4d';
              context.fillText(self.finalResult[0].text, canvas.width / 2, canvas.height / 2 + 258, 610);
              context.fillText(self.finalResult[1].text[0], canvas.width / 2, canvas.height / 2 + 294, 610);
              context.fillText(self.finalResult[1].text[1], canvas.width / 2, canvas.height / 2 + 330, 610);
              context.fillText(self.finalResult[2].text, canvas.width / 2, canvas.height / 2 + 366, 610);
              context.restore();

              var image_data = canvas.toDataURL('image/jpeg');
              $('#user_image').css({
                '-webkit-background-size': '' + (canvas.width / 2) + 'px ' + (canvas.height / 2) + 'px',
                'background-image': 'url(' + image_data + ')',
                'background-position': 'center', 'overflow': 'hidden'
              });


              var user_image = new Image();
              user_image.style.opacity = 0;
              user_image.src = image_data;
              $('#user_image').html(user_image);

              //提交数据
              $.post(
                '//www.yunhuodong.net/wx/event/common/webajax.ashx',
                {
                  action: 'saveapply5',
                  aid: 5,
                  name: self.userName,
                  isexists: 0,
                  pfrom: self.pageFrom,
                  city: self.city,
                  imgurl: image_data
                },
                function (data) {
                  console.log(data);
                }, "json");
            }
          }
        }

      };
    }
  },
  gotoLinkProduct: function () {
    track_buttons('点击产品_' + this.selectedProduct);
    console.log(this.links.product[this.selectedProduct]);
    window.open(this.links.product[this.selectedProduct], '_blank');
  },
  gotoLink1: function () {
    track_buttons('点击预约按钮_' + this.selectedProduct);
    console.log(this.links.link1[this.selectedProduct]);
    window.open(this.links.link1[this.selectedProduct], '_blank');
  },
  gotoLink2: function () {
    track_buttons('点击店铺按钮_' + this.selectedProduct);
    console.log(this.links.link2[this.selectedProduct]);
    if(this.city !== 'usa') {
      window.open(this.links.link2[this.selectedProduct], '_blank');
    } else {
      window.open(this.links.link2_usa[this.selectedProduct], '_blank');
    }
  },

  replay: function () {

    this.doc.showSceneNamed('scene_main', this.doc.kSceneTransitionCrossfade, 0.5);
    $('#result_container').scrollTop(0);
  },

  initSwiper: function () {
    var self = this;
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      slidesPerView: 1.3,
      centeredSlides: true,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          var backround = 'bvlgari.hyperesources/p2_icon_' + self.places[index].tag + '.png';

          return '<span class="' + className + '">' +
            '<i style="background-image:url(' + backround + ');background-size: 100% 100%;"></i>' +
            '</span>';
        }
      },
      on: {
        progress: function (prs) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides[i];

            var progress = slide.progress;
            scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
            es = slide.style;
            es.opacity = 1 - Math.min(Math.abs(progress / 2), 1);
            es.opacity = es.opacity < 0.8 ? 0.8 : es.opacity;

            var preserved_distance = Math.abs(progress * 300) > 300 ? 300 : progress * 300;
            var posY = Math.abs(progress * 30) > 30 ? 30 : progress * 30;
            var posX = -progress * 20;

            es.webkitTransform = es.transform = 'translate3d(' + posX + 'px, ' + Math.abs(posY) + 'px, ' + (-Math.abs(preserved_distance)) + 'px)';
          }
        },
        setTransition: function (speed) {
          for (var i = 0; i < this.slides.length; i++) {
            es = this.slides[i].style;
            es.webkitTransitionDuration = es.transitionDuration = speed + 'ms';
          }
        },
        transitionStart: function () {
          if (self.isSwiperOk) {
            $('#p2_tip').hide();
            console.log('start');
            $('#pig').addClass('pig-run');
          }

        },
        transitionEnd: function () {
          if (self.isSwiperOk) {
            console.log('end');
            $('#pig').removeClass('pig-run');
          }

        }
      }
    })
  },
  swipeNext: function () {
    this.mySwiper.slideNext();
  },
  swipePrev: function () {
    this.mySwiper.slidePrev();
  }
};