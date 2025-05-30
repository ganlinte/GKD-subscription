import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
    {
      key: 2,
      name: '局部广告-信息流广告',
      fastQuery: true,
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.slide.ActivitySlideDetail',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            '@ImageView[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"] - [id="cn.xiaochuankeji.zuiyouLite:id/post_review_ad_logo"]',
          snapshotUrls: 'https://i.gkd.li/import/13387116',
        },
        {
          preKeys: 0,
          name: '点击【不喜欢广告主】',
          matches:
            '@TextView[text="不喜欢广告主"] - [id="cn.xiaochuankeji.zuiyouLite:id/feedback_general_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13387155',
        },
      ],
    },
  ],
});
