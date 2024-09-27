import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.adguard.android',
  name: 'AdGuard',
  groups: [
    {
      key: 1,
      name: '功能类-自动开启保护',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.adguard.android:id/main_switch"][text="主保护开关已关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/16346724',
    },
  ],
});
