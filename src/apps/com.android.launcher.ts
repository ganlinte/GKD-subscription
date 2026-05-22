import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.launcher',
  name: '系统桌面',
  groups: [
    {
      key: 1,
      name: '其他-番茄免费小说-添加至桌面',
      desc: '取消',
      activityIds: '.Launcher',
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: [
            'TextView[id="com.android.launcher:id/alertTitle"][text="添加至桌面"]',
            'TextView[id="com.android.launcher:id/widget_name"][text="随时开启 免费阅读"]',
            '@Button[text="取消"] < LinearLayout +2 LinearLayout > Button[text="添加"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/28154416',
        },
      ],
    },
  ],
});
