import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页-弹窗广告',
      fastQuery: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: '[id="com.wm.dmall:id/advert_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13197627'],
    },
    {
      key: 2,
      name: '局部广告-首页-浮窗广告',
      fastQuery: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: [
        '@[id="com.wm.dmall:id/iv_close"] + [id="com.wm.dmall:id/view_float"]',
        '[id="com.wm.dmall:id/close_iV"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13197634',
        'https://i.gkd.li/import/13246242', //id误触
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      activityIds: 'com.wm.dmall.MainActivity',
      rules: {
        matches: [
          '[id="com.wm.dmall:id/update_confirm_btn"]',
          '[id="com.wm.dmall:id/close_btn"]',
        ],
        snapshotUrls: ['https://i.gkd.li/import/13234668'],
      },
    },
    {
      key: 4,
      name: '全屏广告-优惠劵提示',
      enable: false,
      fastQuery: true,

      rules: {
        matches: [
          '[id="com.wm.dmall:id/coupon_activity"][text="去使用"]',
          '[id="com.wm.dmall:id/iv_close"]',
        ],
        snapshotUrls: ['https://i.gkd.li/import/13331283'],
      },
    },
  ],
});
