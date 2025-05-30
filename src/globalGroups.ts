import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const YOUTH_MODE_ORDER = -9; // 青少年模式
export const UPDATE_PROMPT_ORDER = -8; // 更新提示

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    order: OPEN_AD_ORDER,
    matchTime: 10000,
    fastQuery: true,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximum: 2,
    actionMaximumKey: 0,
    priorityTime: 10000,
    disableIfAppGroupMatch: '开屏广告',
    rules: [
      {
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '青少年模式-全局',
    order: YOUTH_MODE_ORDER,
    fastQuery: true,
    matchTime: 100000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '青少年模式',
    rules: [
      {
        key: 0,
        matches: [
          'TextView[text="未成年人模式" ||text*="青少年模式"]',
          'TextView[text="我知道了"||text="知道了"]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '更新提示-全局',
    order: UPDATE_PROMPT_ORDER,
    fastQuery: true,
    matchTime: 100000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '更新提示',
    rules: [
      {
        key: 0,
        matches: [
          '[text="更新"||text="立即升级"||text="立即更新"||text="优先体验"||text="马上升级！"||text="立即下载"]',
          '[text="取消"||text="忽略"||text="暂不升级"||text="暂不更新"||text="下次再说"||text="以后再说"]',
        ],
      },
    ],
    apps: [...appList.updateBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.updateWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
