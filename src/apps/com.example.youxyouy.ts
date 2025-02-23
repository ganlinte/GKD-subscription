import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.youxyouy',
  name: '有鱼生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-贡献金弹窗',
      fastQuery: true,
      activityIds: '.home.RewardVideoAdActivity',
      rules: [
        {
          anyMatches: [
            '[id="com.example.youxyouy:id/iv_cancel"]',
            '[id="com.example.youxyouy:id/tv_exit"][text="退出"]',
            '[id="com.example.youxyouy:id/tv_action"][text="确定"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18878136',
            'https://i.gkd.li/i/18878152',
            'https://i.gkd.li/i/18878154',
          ],
        },
      ],
    },
  ],
});
