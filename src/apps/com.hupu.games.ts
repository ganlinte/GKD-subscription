import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 1,
      name: '局部广告-推荐流广告',
      desc: '点击卡片右上角广告文字或省略号,出现广告反馈,点击屏蔽该广告',
      fastQuery: true,
      activityIds: [
        'com.hupu.games.main.MainActivity',
        'com.hupu.android.bbs.detail.PostDetailActivity',
        'com.hupu.topic.TopicActivity',
        'com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity',
      ],
      rules: [
        {
          key: 1,
          name: '【广告】',
          anyMatches: [
            '@[id="com.hupu.games:id/shield_view"] >2 [id="com.hupu.games:id/tv_tag"][text="广告"]',
            '@[id="com.hupu.games:id/shield_view"] -n  [id="com.hupu.games:id/af_head"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12511005', //1
            'https://i.gkd.li/import/13258026', //1
            'https://i.gkd.li/import/13259692', //1
            'https://i.gkd.li/i/22327976', //2
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '【屏蔽该广告/不感兴趣】',
          matches: '@TextView[text="屏蔽该广告"||text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12511010', //屏蔽该广告
            'https://i.gkd.li/import/12534848', //屏蔽该广告
            'https://i.gkd.li/import/13259699', //屏蔽该广告
            'https://i.gkd.li/i/18123775', //不感兴趣
          ],
        },
      ],
    },
  ],
});
