import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告-主页',
      desc: '点击右上角关闭,点击我不喜欢',
      activityIds: 'com.twitter.app.main.MainActivity',
      actionCd: 3000, // https://github.com/gkd-kit/subscription/issues/832
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '视频广告-点击右上角关闭',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 LinearLayout + LinearLayout >n [id="com.twitter.android:id/upper_video_attribution"][text="视频将在广告后播放"]',
          snapshotUrls: 'https://i.gkd.li/import/12798795',
        },
        {
          key: 1,
          name: '推荐广告-点击右上角关闭',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: 'https://i.gkd.li/import/12813235',
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12798810',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告-帖子详情页、搜索页',
      desc: '点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]',
      fastQuery: true,
      activityIds: [
        'com.twitter.tweetdetail.TweetDetailActivity',
        'com.twitter.android.search.implementation.results.SearchActivity',
      ],
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12825969', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847584', // com.twitter.android.search.implementation.results.SearchActivity
          ],
        },
        {
          name: '点击右上角关闭2',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882676', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904603', // com.twitter.app.profiles.ProfileActivity
          ],
        },
        {
          name: '点击右上角关闭-英文',
          key: 2,
          matches:
            '[id="com.twitter.android:id/tweet_ad_badge_top_right"] + [id="com.twitter.android:id/tweet_curation_action"]',
          snapshotUrls: ['https://i.gkd.li/import/13680756'],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击屏蔽',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12828815', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847600', // com.twitter.android.search.implementation.results.SearchActivity
            'https://i.gkd.li/import/12904602', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680783', // 兼容英文
          ],
        },
        {
          preKeys: 10,
          key: 11,
          name: '二次确认-点击屏蔽',
          matches:
            '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12828832', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904601', // com.twitter.app.profiles.ProfileActivity
            'https://i.gkd.li/import/13680798', // 兼容英文
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-信息流广告-用户资料页',
      desc: '点击右上角关闭,点击我不喜欢',
      fastQuery: true,
      activityIds: ['com.twitter.app.profiles.ProfileActivity'],
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12825969', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12847584', // com.twitter.android.search.implementation.results.SearchActivity
          ],
        },
        {
          name: '点击右上角关闭2',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882676', // com.twitter.tweetdetail.TweetDetailActivity
            'https://i.gkd.li/import/12904603', // com.twitter.app.profiles.ProfileActivity
          ],
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12798810',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-评价弹窗',
      fastQuery: true,
      matchTime: 10000,
      enable: false,
      rules: [
        {
          activityIds: 'com.twitter.app.main.MainActivity',
          matches: '[id="com.twitter.android:id/app_rating_button_never"]',
          snapshotUrls: 'https://i.gkd.li/import/13774150',
        },
      ],
    },
    {
      key: 5,
      fastQuery: true,
      name: '全屏广告-通知提示-请求通知权限弹窗',
      desc: '点击"Not now"',
      rules: [
        {
          activityIds: 'com.twitter.app.main.MainActivity',
          matches:
            '[id="com.twitter.android:id/secondary_button"] [text="Not now"]',
          snapshotUrls: 'https://i.gkd.li/import/13930126',
        },
      ],
    },
  ],
});
