import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            'TextView[id="tv.danmaku.bili:id/count_down"][text^="跳过"]',
            'TextView[id="tv.danmaku.bili:id/skip"][text^="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12705270',
            'https://i.gkd.li/i/19142386',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-评论区顶部公告横幅',
      fastQuery: true,
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', // 直播间
        'tv.danmaku.bili.MainActivityV2', // 主页
      ],
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
      snapshotUrls: [
        'https://i.gkd.li/import/12785461',
        'https://i.gkd.li/import/12775156',
      ],
    },
    {
      key: 2,
      name: '局部广告-动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      fastQuery: true,
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-视频底部与评论区中间卡片式广告',
      desc: '需点击二次弹窗 屏蔽原因',
      fastQuery: true,
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          anyMatches: [
            '@ImageView < FrameLayout[id="tv.danmaku.bili:id/more" || id="tv.danmaku.bili:id/more_layout"] <n * < FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"]',
            '@ImageView < FrameLayout[id="tv.danmaku.bili:id/more"] <n RelativeLayout < FrameLayout < FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // id="tv.danmaku.bili:id/more"
            'https://i.gkd.li/import/12705266', // id="tv.danmaku.bili:id/more"
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '@TextView[text="不感兴趣"||text="与视频内容不相关"] < RelativeLayout < LinearLayout < LinearLayout[id="tv.danmaku.bili:id/dislike_reasons"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642261', //[text="与视频内容不相关"]
            'https://i.gkd.li/import/13495649', //[text="不感兴趣"]
          ],
        },
      ],
    },
    {
      key: 5,
      name: '其他-悬浮窗功能',
      desc: '暂不开启',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.video.story.StoryVideoActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          matches: [
            'TextView[id="tv.danmaku.bili:id/common_dialog_title"][text^="开启悬浮窗功能"]',
            'TextView[id="tv.danmaku.bili:id/common_dialog_nagetive_btn"][text="暂不开启"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19260138',
            'https://i.gkd.li/i/19402551',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchDelay: 5000,
      activityIds: [
        'com.bilibili.app.preferences.BiliPreferencesActivity',
        'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12649689', // com.bilibili.app.preferences.BiliPreferencesActivity
            'https://i.gkd.li/import/13212209', // tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity
            'https://i.gkd.li/import/13228977',
            'https://i.gkd.li/import/13334963',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12892611',
        'https://i.gkd.li/import/13308344',
        'https://i.gkd.li/import/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
      ],
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
    },
    {
      enable: false,
      key: 9,
      name: '权限提示-请求通知权限弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'tv.danmaku.bili.MainActivityV2',
        'com.bilibili.video.story.StoryTransparentActivity',
      ],
      rules: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13229159',
        'https://i.gkd.li/import/13614090',
      ],
    },
    {
      enable: false,
      key: 10,
      name: '局部广告-首页-推荐视频卡片广告', // 流程与 key=4 视频底部广告 基本一致
      fastQuery: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右下角菜单按钮',
          matches:
            '[id="tv.danmaku.bili:id/ad_tint_frame"] [id="tv.danmaku.bili:id/more"]',
          snapshotUrls: 'https://i.gkd.li/import/13256570',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          matches: '@RelativeLayout > [text$="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13256605',
            'https://i.gkd.li/import/13625309',
            'https://i.gkd.li/import/13742257',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-个性化内容推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules:
        '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13448905',
    },
    {
      key: 12,
      name: '通知提示-订阅感兴趣的通知',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'kntr.common.compose.launcher.ComposeContainerActivity',
          matches: [
            'TextView[id="tv.danmaku.bili:id/title"][text="订阅感兴趣的通知"]',
            'TextView[id="tv.danmaku.bili:id/close"][text="暂不开启"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19402549',
        },
      ],
    },
  ],
});
