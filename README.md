# Blazor-blog

如果你想拥有一个免费的博客，那么这是你的一个选择。

借助`github pages`和`dotnet blazor`，你可以拥有一个自定义的个人博客。

## 使用Github Page部署

### Fork本仓库

点击Fork按钮，并创建自己的仓库。

### 修改 base href

当你使用Github Page或使用ISS子应用部署时，需要调整base href。

你只需要修改根目录下的`webinfo.json`文件中的`BaseHref`值即可。
如:

```json
{
  "Name": "Niltor Blog",
  "Description": "My Blog - Powered by Ater Blog",
  "AuthorName": "Ater",
  "BaseHref": "/blazor-blog/"
}
```

注意，尾部的`/`是必需的。

> [!NOTE]
> 可以查看[官方文档](https://learn.microsoft.com/zh-cn/aspnet/core/blazor/host-and-deploy/?view=aspnetcore-3.1&tabs=visual-studio#configure-the-app-base-path)来了解更多部署内容。
>

### 编写博客

请使用任何你习惯的markdown编辑器，来编写博客，唯一的要求，是你需要将博客内容放到`Content`目录下。

### 发布博客

你只需要正常提交代码即可，github action会自动构建并最终发布你的博客，发布成功后可打开您的 github page 查看。

## 部署到其他服务

如果你不使用Github Page，那么你也可以轻松的部署到其他应用。核心的步骤只需要两步。

### 生成静态站点

`BuildSite`项目是用来将markdown转换成html的，请在根目录执行

```pwsh
 dotnet run --project .\Lib\BuildSite\
```

运行后，会生成相关的数据和html文件到`Blog`项目下的`wwwroot`中。

### 发布静态站点

我们使用`Blazor WASM`来开发前端静态网站，所以，你只需要使用`dotnet publish`命令将网站发布成静态文件即可。

### 上传到你的服务器

将生成的静态文件复制到你的服务器即可。

> [!TIP]
> 根目录下的`publishToLocal.ps1`脚本可以自动生成和发布，发布的内容将在根目录下`_site`目录中。
>
> 如果你使用自动化部署，可参考.github/workflows中的脚本。

## 二次开发

fork之后，你将拥有所有的自定义权限，因为所有的源代码都已经在你自己的仓库中。

仓库主要包含两个核心项目，一个是`BuildSite`，该项目是用来生成数据文件的，其中包括将markdown文件转换成html文件。

`Blog`项目是一个Blazor WASM项目，默认包含了博客的主页定义。你可以自由的添加和修改其他的功能。

### 自定义博客样式

`wwwroot/css`目录下的`markdown.css`文件，是用来定义博客页中的样式，你可以通过修改该文件来自定义自己想要的样式。