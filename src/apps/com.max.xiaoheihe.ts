import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    // { key: 0 }, 开屏广告 占位
    {
      key: 1,
      name: '全屏广告-弹窗_签到成功',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: [
            '[text="签到成功!"]',
            '[id="com.max.xiaoheihe:id/tv_confirm"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13421535',
        },
      ],
    },
  ],
});
