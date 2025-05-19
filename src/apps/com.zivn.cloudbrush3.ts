import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zivn.cloudbrush3',
  name: '书法字典大全',
  groups: [
    {
      enable: false,
      key: 3,
      name: '局部广告-信息流广告',
      fastQuery: true,
      activityIds: 'com.zivn.cloudbrush3.app.HomeActivity',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            '@View[clickable=true] < FrameLayout  -2 FrameLayout [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13425305',
        },
        {
          preKeys: 0,
          name: '点击【不感兴趣】',
          matches:
            '@LinearLayout > [id="com.byted.pangle.m:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13425306',
        },
      ],
    },
  ],
});
