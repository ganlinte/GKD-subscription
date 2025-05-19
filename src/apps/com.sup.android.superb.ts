import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text$="青少年模式"] + [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13796869',
    },
    {
      key: 5,
      name: '全屏广告-请求开启通知权限弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启推送通知"] +2 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13691081',
    },
    {
      key: 6,
      name: '局部广告-右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sup.android.base.MainActivity',
      rules:
        'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13624220',
    },
    {
      key: 7,
      fastQuery: true,
      name: '更新提示',
      desc: '点击我再想想',
      rules: [
        {
          matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/import/13858490',
        },
      ],
    },
  ],
});
