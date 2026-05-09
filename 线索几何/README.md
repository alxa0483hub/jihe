# 线索几何

这是一个面向初二几何拔高训练的辅助线游戏原型，核心训练目标是：

- 判断几何题的破局策略
- 选择有效辅助线
- 排列关键证明链
- 通过提示和扣分机制进行高阶练习

## 本地打开

直接双击 `index.html` 即可运行。

也可以用本地服务器预览：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `xiansuo-jihe`。
2. 把本文件夹里的全部文件上传到仓库根目录：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. 打开仓库的 `Settings`。
4. 进入 `Pages`。
5. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. 保存后等待 GitHub 生成访问地址。

部署完成后，GitHub Pages 会给出类似这样的地址：

```text
https://你的用户名.github.io/xiansuo-jihe/
```

## 文件说明

- `index.html`：页面入口
- `styles.css`：页面样式
- `app.js`：题库、绘图、交互和评分逻辑
