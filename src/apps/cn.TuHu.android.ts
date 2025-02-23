import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules:
        '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13228818',
    },
    {
      key: 10,
      fastQuery: true,
      name: '权限提示-请求通知权限弹窗',
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules: '[id="cn.TuHu.android:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13228796', //推送提醒消息弹窗
        'https://i.gkd.li/import/13256535', //2023年11月5日新增推送物流进度等信息弹窗
      ],
    },
  ],
});
