# 欢迎使用 PicFlare

PicFlare 创立于 2025 年 1 月 19 日，次日发布初代版本。

PicFlare 是一款简单的随机图片 API。

## 使用方法

### Github 准备

在进行一切操作之前，你应当拥有一个 **Github 帐号**；如果没有，请自行[注册](https://github.com/join)，不再赘述。
登录后，请逐步操作：

1.   打开 <https://github.com/pandaoxi/picflare>，点击 Fork 按钮。

     ![PixPin_2025-01-20_21-43-19](/post-images/PixPin_2025-01-20_21-43-19.png)

     跳转后，可以直接点击页面**底部**的按钮 `Create Fork`。

2.   在 `public/images` 上传你想要的图片。当然，如果你不需要我的示例图片，可以把它们都删掉。

     >   建议：
     >
     >   -   使用**本地操作**（即 Git）修改图库。
     >
     >   -   使用 webp 格式图片。这样可以不用修改 JS 代码，也节约加载时间。

3.   保留好你的仓库。

### Netlify 准备

同样的，我们需要一个 netlify 帐号并进行相关设置。帐号应与刚才所说的 Github 帐号绑定。

1.   进入 Teams 页面，新建站点。

     ![PixPin_2025-01-20_22-06-00](/post-images/PixPin_2025-01-20_22-06-00.png)

2.   从 Github 导入，选中你刚才 Fork 得到的仓库。

     ![PixPin_2025-01-20_22-07-21](/post-images/PixPin_2025-01-20_22-07-21.png)

     ![PixPin_2025-01-20_22-08-41](/post-images/PixPin_2025-01-20_22-08-41.png)

3.   填写一个 `Site Name`。我这里填写的是 `picflare`。

     ![PixPin_2025-01-20_22-11-24](/post-images/PixPin_2025-01-20_22-11-24.png)

4.   滑到页面最底部，点击 Deploy PicFlare。等待部署完成，由 `Site deploy in progress` 变为你的网页即可。类似于：
     ![PixPin_2025-01-20_22-17-11](/post-images/PixPin_2025-01-20_22-17-11.png)

5.   如果你的网页可以正常访问，那么你的 API 就是：
     `https://<your-site>.netlify.app/.netlify/functions/randomImage`



这样就可以了。如果你需要更新图片库，可以修改 Github 中的仓库。

祝使用愉快！