import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      activityIds: 'com.alibaba.ailabs.tg.activity.HomeActivity',
      rules:
        '[id="com.alibaba.ailabs.tg:id/ll_download"] + [id="com.alibaba.ailabs.tg:id/va_dialog_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13296332',
    },
  ],
});
