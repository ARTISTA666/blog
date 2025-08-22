// Gitalk 评论系统配置
// 使用说明：
// 1. 在GitHub上创建一个新的OAuth应用：https://github.com/settings/applications/new
// 2. 将以下配置中的占位符替换为实际值
// 3. 在文章页面的适当位置添加评论容器

const gitalkConfig = {
    // GitHub OAuth应用信息
    clientID: 'YOUR_GITHUB_CLIENT_ID',
    clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
    
    // 仓库信息
    repo: 'blog-comments',              // 用于存储评论的仓库名
    owner: 'YOUR_GITHUB_USERNAME',      // GitHub用户名
    admin: ['YOUR_GITHUB_USERNAME'],    // 管理员列表
    
    // 基本配置
    id: location.pathname,              // 页面唯一标识
    distractionFreeMode: false,         // 无干扰模式
    language: 'zh-CN',                  // 界面语言
    perPage: 10,                        // 每页评论数
    pagerDirection: 'last',             // 分页方向
    createIssueManually: false,         // 自动创建Issue
    
    // 样式配置
    theme: 'github-light',              // 主题样式
    enableHotKey: true,                 // 启用快捷键
    
    // 代理配置（解决CORS问题）
    proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
};

// 初始化Gitalk
function initGitalk() {
    if (typeof Gitalk !== 'undefined') {
        const gitalk = new Gitalk(gitalkConfig);
        gitalk.render('gitalk-container');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initGitalk);