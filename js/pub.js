const pub = {
  // 公共接口地址
  _url: "http://192.168.35.246/CMS",
  // 详细接口api地址
  _DetailApi: {
      getPart:'/web/column/column_articles_list_page' //获取文章栏目列表
  },
  /**
   * op 形参
   * @param {*} that this指向
   * @param {*} _url 公共接口地址
   * @param {*} ur 具体接口地址
   * @param {*} data 形参
   * @param {*} cbk 回调
   */
  _InitAjax(op) {
    $.ajax({
      type: "POST",
      // timeout : 1000, //超时时间设置，单位毫秒
      contentType: "application/json",
      url: op._url + op.ur,
      data: JSON.stringify(op.data),
      error: function(request) {
       
      },
      success: function(res) {
        op.cbk(res);
      },

      fail: function(r) {
   

      }
    });
  },
  _InitAxios(op) {
    axios({
      url: op._url + op.ur,
      method: "post",
      data: JSON.stringify(op.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        op.cbk(res.data);
      })
      .catch(cat => {

      });
  },

  /**
   *  截取页面链接中的参数
   *  window.location
   *  window的location对象
   *  search
   *  得到的是url中query部分
   *  substr()
   *  返回一个从指定位置开始的指定长度的子字符串
   *  这里设置为1，是为了把url中的?号去掉
   *  split()
   *  将一个字符串分割为子字符串，然后将结果作为字符串数组返回
   *  这里就是把query部分以&为分割符，分割
   */
  _LinkParm: function(variable) {
    var query = window.location.search.substring(1);//截取查询字符串?后面的参数
    // console.log(variable);
    var vars = query.split("&");   // 用&符号将其分割起来
    // console.log(vars);
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // console.log(pair);
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
    var query1 = window.location.search.s;
  },

  /**
   * @param {*} event 输入框的值
   * @param {*} tgt 输入框绑定的值
   */
  _CheckPhone(event, tgt) {
  
    var phone = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    if (!phone.test(tgt)) {
      alert("输入正确的手机号！");
      tgt = "";
    }
  },

  /**
   * 数组转对象
   */
  _change_obj(arr) {
    var _obj = {};
    for (var it = 0; it < arr.length; it++) {
      for (var item in arr[it]) {
        _obj[item] = arr[it][item];
      }
    }
    return _obj;
  },

  /**
   *
   * @param {*} old_r 原有数组
   * @param {*} new_r 新数组 需要连接到原有数组之上
   */
  _Arr_concat(old_r, new_r) {
    var arr = old_r;
    var _r = new_r;
    var _c = arr.concat(_r);
    old_r = _c;
  
    return old_r;
  },

  /**
   * 判断是否为空字符串
   * @param {*} obj  传入形参 即需要判断的字符串
   */
  _isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  }

};


