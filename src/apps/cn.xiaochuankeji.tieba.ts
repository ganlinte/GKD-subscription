import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: 3,
      name: '局部广告-评论区广告卡片',
      fastQuery: true,
      activityIds: '.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '@[id="cn.xiaochuankeji.tieba:id/iv_close"] - [id="cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag"][text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12661011',
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@[id="cn.xiaochuankeji.tieba:id/tvContent"][text="不感兴趣"] < LinearLayout - [id="cn.xiaochuankeji.tieba:id/iv_dislike_reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12661028',
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-系统通知弹窗',
      desc: '系统通知弹窗，点击暂不开启',
      fastQuery: true,
      activityIds: '.ui.home.page.PageMainActivity',
      rules: [
        {
          matches:
            '@Button[id="cn.xiaochuankeji.tieba:id/cancel"][text="暂不开启"] - [id="cn.xiaochuankeji.tieba:id/confirm"][text="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12660823',
        },
      ],
    },
    {
      key: 11,
      name: '通知提示-系统通知提示信息',
      desc: '系统通知提示信息，点击x按钮',
      fastQuery: true,
      activityIds: '.ui.home.page.PageMainActivity',
      rules: [
        {
          matches:
            '@ImageView[id="cn.xiaochuankeji.tieba:id/tips_close"] -2 TextView[text^="开启通知"] < [id="cn.xiaochuankeji.tieba:id/tips"]',
          snapshotUrls: 'https://i.gkd.li/import/12660851',
        },
      ],
    },
  ],
});
