import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@View + TextView[index=parent.childCount.minus(1)] <n FrameLayout < FrameLayout < FrameLayout[id="com.cainiao.wireless:id/fl_third_splash_container"]',
            'TextView[id="com.cainiao.wireless:id/homesplash_close_fullscreen"][text^="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19222366',
            'https://i.gkd.li/i/19477428',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          fastQuery: true,
          matches: '[id="com.cainiao.wireless:id/draw_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12914371',
            'https://i.gkd.li/import/13692758',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13042279',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-包裹页面-地图底部横条广告',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: ['https://i.gkd.li/import/12914450'],
    },
    {
      key: 4,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      ],
      rules: '[text="确认"] - [text="取消"]',
      snapshotUrls: ['https://i.gkd.li/import/13042207'],
    },
    {
      key: 5,
      name: '权限提示-开启消息弹窗',
      desc: '自动点击关闭。',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      ],
      rules: '[id="com.cainiao.wireless:id/gg_dialog_base_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13068573'],
    },
    {
      key: 6,
      name: '全屏广告-请求好评弹窗',
      activityIds: 'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      rules: '@[text="取消"] + [text="好评"]',
      snapshotUrls: 'https://i.gkd.li/import/13692761',
    },
    {
      key: 7,
      name: '全屏广告-今日手气红包',
      desc: '点击右上角X',
      fastQuery: true,
      activityIds:
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      rules: '[vid="dialog_full_image_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13842492',
    },
  ],
});
