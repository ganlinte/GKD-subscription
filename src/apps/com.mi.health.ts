import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '全屏广告-好评弹窗',
      activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.mi.health:id/nextView"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13258813',
    },
    {
      key: 2,
      name: '全屏广告-权限提醒',
      activityIds: 'com.xiaomi.fitness.main.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]',
      snapshotUrls: 'https://i.gkd.li/import/13495035',
    },
    {
      key: 3,
      name: '全屏广告-活动弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          fastQuery: true,
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13537836',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[text^="发现新版本"] < * + * >n [text="放弃更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13537840',
        },
        {
          activityIds: 'com.mi.health.home.HomeActivity',
          matches:
            '[text="立即更新"] + [id="com.mi.health:id/tv_negative"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13626328',
        },
      ],
    },
  ],
});
