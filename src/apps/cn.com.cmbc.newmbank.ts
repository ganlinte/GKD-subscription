import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
    id: 'cn.com.cmbc.newmbank',
    name: '民生银行',
    groups: [
        {
            key: 0,
            name: '开屏广告',
            fastQuery: true,
            matchTime: 10000,
            actionMaximum: 1,
            resetMatch: 'app',
            rules: [
                {
                    matches: 'View[id="cn.com.cmbc.newmbank:id/view_count_down"]',
                    snapshotUrls: 'https://i.gkd.li/i/19463734',
                }
            ],
        }
    ],
})