import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
    {
      key: 1,
      name: '全屏广告-服务提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            '[text="开启钱包扩展服务"] +2 [id="com.huawei.wallet:id/linear_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13441814',
        },
      ],
    },
  ],
});
