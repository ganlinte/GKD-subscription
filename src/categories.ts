import type { RawCategory } from './types';

const categories: RawCategory[] = [
  {
    key: 0,
    name: '开屏广告',
  },
  {
    key: 1,
    name: '青少年模式',
  },
  {
    key: 2,
    name: '更新提示',
  },
  {
    key: 3,
    name: '评价提示',
  },
  {
    key: 4,
    name: '通知提示',
    // 软件用于告知用户信息的弹窗
    // 具体体现为公告弹窗一类
  },
  {
    key: 5,
    name: '权限提示',
    // 各种权限请求，如定位权限、通知权限等
  },
  {
    key: 6,
    name: '局部广告',
    // 不影响使用的广告, 所有的广告卡片及悬浮广告按钮
  },
  {
    key: 7,
    name: '全屏广告',
    // 不关闭广告就无法进行其它操作的广告弹窗, 它阻碍用户操作
    // 一般是刚进入APP时显示的全屏弹窗
  },
  {
    key: 8,
    name: '分段广告',
    // 如微信朋友圈广告/酷安帖子广告/贴吧帖子广告
    // 需要分阶段多步操作才能关闭, 会造成屏幕略微闪烁, 稍微影响用户体验
  },
  {
    key: 9,
    name: '功能类',
    // 非广告, 点击某些功能按钮
  },
  {
    key: 10,
    name: '其他', // 分类不明确
  },
];

export default categories;
