import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.animad',
  name: '動畫瘋',
  groups: [
    {
      key: 1,
      name: '功能类-动画疯年龄限制',
      desc: '点击同意',
      activityIds: 'tw.com.gamer.android.animad.VideoActivity',
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="tw.com.gamer.android.animad:id/agree_button"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/import/13808757',
        },
      ],
    },
  ],
});
