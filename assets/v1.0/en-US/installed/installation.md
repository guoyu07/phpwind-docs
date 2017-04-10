# Fans 安装指南

> 安装指南将讲解如何安装 Fans 版程序。

## 服务器要求

Fans 程序会有一些系统上的要求。

你需要确保你的服务器上安装了下面的几个拓展：

- PHP >= 5.3.12
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- cURL PHP Extension
- GD PHP Extension
- mcrypt PHP Extension
- zip PHP Extension

> 其实大部分环境以上都是被默认安装的，但是还是建议检查环境是否都有这些拓展安装。

## 安装 Fans

> 这里讲解的是使用从 GitHub 获取源码的形式安装，而非 dist 安装。

首先，你应当进入 [releases](https://github.com/medz/phpwind/releases) 页面，下载 Latest 的 Fsns 1.0 程序，选择 **source code** 下载源代码。

> 一般有 zip 和 tar.gz 两个版本，自行选择。

然后你需要安装一份 [Composer](http://docs.phpcomposer.com/) 但是考虑到中国大陆地区的网络环境问题，推荐安装完成后配置 [中国全量镜像](https://pkg.phpcomposer.com/) 这样，你在中国大陆地区就可以正常快速的使用 Composer 了。

安装完成 Composer 后，将下载的 **source code** 解压（放置到你喜欢的网站位置）。进入程序目录执行下列命令：

```shell
composer install
```

> 如果你将 *composer.phar* 也放置在 Fans 根目录，上述 `composer` 关键词以 `php composer.phar` 代替。

执行命令后 Composer 会自动下载 Fans 程序需要的依赖。

完成后，打开你的网站 `https://yousite/install.php` 按照网页要求填写网站配置信息即可安装完成。


## 配置

### 配置文件

Fans 框架所有的配置文件都存放在 conf 目录下。每个选项都被加入文档，所以你可以自由的浏览文件，轻松的熟悉你的选项。

### 目录权限

安装 Fans 之后，你需要配置一些权限。 `data`、`attachment`、`windid/attachment` 目录应该允许你的 Web 服务器写入，否则 Fans 将无法写入导致程序运行不正常。

## Web 服务器配置

> 优雅连接，这个在 Fans 1.0 中保持和 phpwind 9 一致

### Apache

Fans 已经为你做好了 Apache 的配置，通过 `.htaccess` 文件来让 URL 不要需要 index.php 即可访问。在 Apache 启用 优雅链接之前，请先确认是否开启了 *mod_rewrite* 模块，以便 .htaccess 文件发挥作用。

如果 Fans 附带的 .htaccess 文件在 Apache 中无法使用的话，请尝试下方的做法：

```
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

### Nginx

如果你使用 Nginx ，在你的网站配置中加入下述代码将会转发所有的请求到 index.php 前端控制器。

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

