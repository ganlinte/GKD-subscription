import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击 跳过',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      actionMaximum: 1,
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.hihonor.appmarket:id/tv_operation_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/15087199',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-广告提示',
      fastQuery: true,
      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063815',
        'https://i.gkd.li/import/13168440',
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063928',
    },
    {
      key: 3,
      name: '全屏广告-推送通知',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/import/13073319',
    },
    {
      key: 4,
      name: '全屏广告-为您专属推荐',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="com.hihonor.appmarket:id/app_recommendation_cancel_btn"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/19222443',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-应用推荐卡片添加至桌面',
      desc: '【我再想想】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="com.hihonor.appmarket:id/app_cancel_btn"][text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/i/19222473',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-个性化内容推荐',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="android:id/button2"][text="取消"] + Button[id="android:id/button1"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/i/19222508',
        },
      ],
    },
    {
      key: 7,
      name: '通知提示',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            '@Button[id="android:id/button2"][text="取消"] + Button[id="android:id/button1"][text="立即开启"]',
          snapshotUrls: 'https://i.gkd.li/i/19222532',
        },
      ],
    },
  ],
});
