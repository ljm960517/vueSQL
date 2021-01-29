var options1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "0%",
    top: "10px",
    right: "0%",
    bottom: "4%",
    containLabel: true,
  },
  xAxis: [{
    type: "category",
    data: [
      "商超",
      "教育",
      "房地产",
      "生活",
      "汽车",
      "旅游",
      "五金",
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,.1)",
        width: 1,
        type: "solid",
      },
    },

    axisTick: {
      show: false,
    },
    axisLabel: {
      interval: 0,
      // rotate:50,
      show: true,
      splitNumber: 15,
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12",
      },
    },
  }, ],
  yAxis: [{
    type: "value",
    axisLabel: {
      //formatter: '{value} %'
      show: true,
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12",
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,.1	)",
        width: 1,
        type: "solid",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,.1)",
      },
    },
  }, ],
  series: [{
    type: "bar",
    data: [200, 300, 300, 900, 1500, 1200, 600],
    barWidth: "35%", //柱子宽度
    // barGap: 1, //柱子之间间距
    itemStyle: {
      normal: {
        color: "#2f89cf",
        opacity: 1,
        barBorderRadius: 5,
      },
    },
  }, ],
};

var options2 = {
  //  backgroundColor: '#00265f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0%',
    top: '10px',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,.1)",
        width: 1,
        type: "solid"
      },
    },

    axisTick: {
      show: false,
    },
    axisLabel: {
      interval: 0,
      // rotate:50,
      show: true,
      splitNumber: 15,
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: '12',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    axisLabel: {
      //formatter: '{value} %'
      show: true,
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: '12',
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,.1	)",
        width: 1,
        type: "solid"
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,.1)",
      }
    }
  }],
  series: [{

      type: 'bar',
      data: [1500, 1200, 600, 200, 300, 300, 900],
      barWidth: '35%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#27d08a',
          opacity: 1,
          barBorderRadius: 5,
        }
      }
    }

  ]
};

var fb1 = {
  title: [{
    text: '年龄分布',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: '16'
    }

  }],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)",
    position: function (p) { //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    }
  },
  legend: {

    top: '70%',
    itemWidth: 10,
    itemHeight: 10,
    data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    }
  },
  series: [{
    name: '年龄分布',
    type: 'pie',
    center: ['50%', '42%'],
    radius: ['40%', '60%'],
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    data: [{
        value: 1,
        name: '0岁以下'
      },
      {
        value: 4,
        name: '20-29岁'
      },
      {
        value: 2,
        name: '30-39岁'
      },
      {
        value: 2,
        name: '40-49岁'
      },
      {
        value: 1,
        name: '50岁以上'
      },
    ]
  }]

}

var fb2 = {

  title: [{
    text: '职业分布',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: '16'
    }

  }],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)",
    position: function (p) { //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    }
  },
  legend: {

    top: '70%',
    itemWidth: 10,
    itemHeight: 10,
    data: ['电子商务', '教育', 'IT/互联网', '金融', '学生', '其他'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    }
  },
  series: [{
    name: '年龄分布',
    type: 'pie',
    center: ['50%', '42%'],
    radius: ['40%', '60%'],
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    data: [{
        value: 5,
        name: '电子商务'
      },
      {
        value: 1,
        name: '教育'
      },
      {
        value: 6,
        name: 'IT/互联网'
      },
      {
        value: 2,
        name: '金融'
      },
      {
        value: 1,
        name: '学生'
      },
      {
        value: 1,
        name: '其他'
      },
    ]
  }]
};

var fb3 = {
  title: [{
    text: '兴趣分布',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: '16'
    }

  }],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)",
    position: function (p) { //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    }
  },
  legend: {
    top: '70%',
    itemWidth: 10,
    itemHeight: 10,
    data: ['汽车', '旅游', '财经', '教育', '软件', '其他'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    }
  },
  series: [{
    name: '兴趣分布',
    type: 'pie',
    center: ['50%', '42%'],
    radius: ['40%', '60%'],
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    data: [{
        value: 2,
        name: '汽车'
      },
      {
        value: 3,
        name: '旅游'
      },
      {
        value: 1,
        name: '财经'
      },
      {
        value: 4,
        name: '教育'
      },
      {
        value: 8,
        name: '软件'
      },
      {
        value: 1,
        name: '其他'
      },
    ]
  }]
};

export default {
  options1,
  options2,
  fb1,
  fb2,
  fb3
}
