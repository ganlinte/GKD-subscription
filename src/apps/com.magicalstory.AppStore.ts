import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            '.search.searchActivity',
            '.main.fragments.square.section.searchPostActivity',
          ],
          // visibleToUser防止误触
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout <n [childCount=5] < * < * < * < * < * < [id="com.magicalstory.AppStore:id/banner2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17618529',
            'https://i.gkd.li/i/17618518',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-公告',
      activityIds: 'com.magicalstory.AppStore.main.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[id="com.magicalstory.AppStore:id/txt_dialog_title"][text="公告"]',
            '[id="com.magicalstory.AppStore:id/btn_selectNegative"][text="隐藏"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13437553',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13459373',
    },
  ],
});
