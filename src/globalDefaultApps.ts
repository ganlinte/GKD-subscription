import { batchImportApps } from '@gkd-kit/tools';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  'app.eleven.com.fastfiletransfer', // 文件闪传
  'app.mihon', // Mihon
  'app.rikka.savecopy', // 保存副本
  'bin.mt.plus', //MT管理器
  'cn.gov.pbc.dcep', //数字人民币
  'com.absinthe.libchecker', // LibChecker
  'com.accessibilitymanager', // 无障碍管理器
  'com.aistra.hail', // 雹
  'com.alibaba.aliyun', // 阿里云
  'com.alicloud.databox', // 阿里云盘 开屏广告在 https://i.gkd.li/i/15144565 误触导致自动签到规则执行中断
  'com.assistant.ongoingclear', // 固定通知隐藏
  'com.azure.authenticator', //Authenticator
  'com.deepl.mobiletranslator', // DeepL
  'com.deepseek.chat', //DeepSeek
  'com.dv.adm', // ADM
  'com.eg.android.AlipayGphone', //支付宝
  'com.example.c001apk', // c001apk
  'com.follow.clash', //FlClash
  'com.funny.translation', // 译站
  'com.getsurfboard', // Surfboard
  'com.github.android', // GitHub
  'com.github.kr328.clash', // Clash for Android
  'com.github.metacubex.clash.meta', // Clash Meta for Android
  'com.github.wgh136.pica_comic', // Pica Comic
  'com.guozhigq.pilipala', // PiliPala
  'com.heyanle.easybangumi4', // 纯纯看番
  'com.huanchengfly.tieba.post', // 贴吧Lite
  'com.huawei.ohos.inputmethod', //小艺输入法
  'com.idaodan.clean.master', // 雪豹速清
  'com.jiaohua_browser', //JMComic2
  'com.ktls.automation', // 自动点击工具
  'com.ktls.fileinfo', // 存储空间清理
  'com.lalilu.lmusic', // LMusic
  'com.looker.droidify', // Droid-ify
  'com.magicalstory.AppStore', // 奇妙应用
  'com.magicalstory.installer', // 奇妙安装程序
  'com.magicalstory.videos', // 奇妙影视
  'com.mihotel.activatebrevent', //用Shizuku激活
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mxtech.videoplayer', // MX播放器
  'com.mxtech.videoplayer.pro', // MX播放器专业版
  'com.mycompany.app.soulbrowser', // soul浏览器
  'com.perol.pixez', // PixEz
  'com.perol.play.pixez', // PixEz Google Play版
  'com.rosan.accounts', // Accounts
  'com.rosan.dhizuku', // Dhizuku
  'com.rosan.installer.x', // installerX
  'com.salt.music', // Salt Player
  'com.samsung.agc.gcam84', // 相机
  'com.suda.yzune.wakeupschedule', //WakeUp课程表
  'com.tencent.mm', // 微信
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.twitter.android', // X(推特)
  'com.v2ray.ang', // v2rayNG
  'com.valvesoftware.android.steam.community', // Steam
  'com.wsw.cospa', // 异次元
  'com.x8bit.bitwarden', // Bitwarden
  'com.xiaoyv.bangumi', // Bangumi for Android
  'com.xjcheng.musictageditor', // 音乐标签
  'com.xjs.ehviewer', //EhViewer
  'com.xuncorp.qinalt.music', // 青盐云听
  'com.yenaly.han1meviewer', // Han1meViewer
  'dev.anilbeesetti.nextplayer', // Next Player
  'idm.internet.download.manager', // 1DM
  'idm.internet.download.manager.plus', // 1DM+
  'io.github.jd1378.otphelper', // 短信验证码自动复制
  'io.legado.app.release', // 阅读
  'io.virtualapp.sandvxposed64', //伏羲 X64
  'jp.pxv.android', //pixiv
  'li.songe.gkd', // GKD
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'me.ash.reader', // Read You
  'me.piebridge.brevent', //黑域
  'me.tasy5kg.cutegif', // 小萌GIF
  'me.zhanghai.android.files', // 质感文件
  'moe.nb4a', // NekoBox
  'moe.shizuku.privileged.api', // Shizuku
  'org.kde.kdeconnect_tp', // KDE Connect
  'org.koitharu.kotatsu', // Kotatsu
  'org.localsend.localsend_app', // LocalSend
  'org.lsposed.lspatch', //LSPatch
  'org.telegram.messenger', // Telegram
  'ru.zdevs.zarchiver', // ZArchiver
  'ru.zdevs.zarchiver.pro', // ZArchiver Pro
  'web1n.stopapp', //小黑屋
  'xyz.adproqwq.GKDTool', // GKDTool

  'com.bug.hookvip',
  'com.canghai.haoka',
  'com.github.tianma8023.xposed.smscode',
  'com.microsoft.office.officehub',
  'com.pittvandewitt.wavelet',
  'com.rezvorck.tiktokplugin',
  'com.tsng.hidemyapplist',
  'com.viewblocker.jrsen',
  'com.xy.td',
  'com.zhiliaoapp.musically',
  'Han.GJZS',
  'io.github.huskydg.magisk',
  'io.github.qauxv',
  'one.yufz.hmspush',
  'one.yufz.onebox',
  'org.adblockplus.adblockplussbrowser',
  'org.lsposed.manager',
  'tw.nekomimi.nekogram',
  'xzr.konabess',

  // 系统自带非系统应用
  // 小米
  'cn.wps.moffice_eng.xiaomi.lite', // 小米文档查看器
  'com.android.deskclock', // 时钟 https://github.com/gkd-kit/gkd/issues/560
  'com.android.email', // 电子邮件
  'com.android.soundrecorder', // 录音机
  'com.duokan.phone.remotecontroller', // 万能遥控
  'com.mfashiongallery.emag', // 小米画报
  'com.miui.calculator', // 计算器
  'com.miui.cleanmaster', // 垃圾清理
  'com.miui.compass', // 指南针
  'com.miui.huanji', // 小米换机
  'com.miui.mediaeditor', // 小米相册-编辑
  'com.miui.newmidrive', // 小米云盘
  'com.miui.notes', // 笔记
  'com.miui.screenrecorder', // 屏幕录制
  'com.miui.weather2', // 天气

  //三星
  'com.adguard.android.contentblocker',
  'com.android.samsung.utilityapp',
  'com.futuremark.dmandroid.application',
  'com.jv.samsungeshop',
  'com.samsung.android.app.cameraassistant',
  'com.samsung.android.app.galaxyraw',
  'com.samsung.android.app.notes',
  'com.samsung.android.app.reminder',
  'com.samsung.android.app.sreminder',
  'com.samsung.android.app.watchmanager',
  'com.samsung.android.appbooster',
  'com.samsung.android.calendar',
  'com.samsung.android.goodlock',
  'com.samsung.android.thermalguardian',
  'com.sec.android.app.clockpackage',
  'com.sec.android.app.music',
  'com.sec.android.app.voicenote',
];

// 如果某应用的规则中已有全局规则中的某一类的规则, 则在此应用禁用对应全局规则
function filterAppsByGroup(apps: any[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length > 0,
    )
    .map((a) => a.id);
}

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '开屏广告'),
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '更新提示'),
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
