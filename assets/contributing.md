Fans 版源代码贡献指南
==================

在引导中，将指导用户或者开发者进行 Fans 源代码积极贡献。

## 错误反馈

为了提倡积极协作，Fans 版强烈地鼓励使用 Pull Request，而不仅仅只是反馈错误。「错误反馈」可以以一个包含失败测试的 Pull Request 的形式发送。

假如你提交了错误反馈，那么反馈中应该包含着标题和详尽的问题描述，并尽可能多的提供相关的信息和错误问题的代码示例。错误反馈的主要目的是让自己和其他人可以简单地重现并修复错误。

请记住，错误反馈的初衷是让其它有相同问题的人可以协作解决问题。不要期望反馈错误后会很快有人会马上修复它。创建错误反馈主要是为了能帮助你自己和其他人开始着手修复问题。

*Fans* 源代码托管在 *GitHub* 上面: [medz/phpwind](https://github.com/medz/phpwind)。

## 核心开发讨论

如果你想提出功能建议，或者改进现有的 Fans 的行为，请到 [medz/phpwind](https://github.com/medz/phpwind) 项目的 Issues 讨论。如果你想提出功能建议，我们希望你愿意为此功能贡献一些代码。

有关错误、新功能和现有功能的实现讨论会在 [QQ群: 30568679](https://shang.qq.com/wpa/qunwpa?idkey=4bdc6869a010f9371c81047847960e9d89ce0585e23308a4f00f99ecb27c48f7) 群中进行。Fans 的维护者 *Seven Du* 在非工作日时间 8pm 到 11pm 以及周末全天在线，其它时间偶尔也会出现。

## 选择分支

针对不同版本，会在 Fans 版仓库拥有不同的分支，只有向上兼容的修复才会合并到 master 分支中，如果只是针对 对应老版本的修复，永远不应该发送到 master 分支。

主要的 新功能应该都发送到 master 分支，它包含下一版的 Fans 发布内容。

次要的 且与现有的 Fans 发布版本 完全向下兼容 的功能可以发送到最新的稳定分支。

如果不确定你的功能是主要的还是次要的，请在 QQ 群文 Seven Du。

## 安全漏洞

如果你发现安全漏洞，可以在仓库的 Issues 中提交，或者发送邮件到 [shiweidu@outlook.com](mailto:shiweidu@outlook.com)，所有的安全漏洞将会及时予以处理。

## 编码风格

Fans 版严格遵循 **PSR-2** 编码规范和 **PSR-4** 自动加载规范。

## StyleCI

Fans 版使用 StyleCI 来做代码矫正，所有 PR 都会在合并后被矫正代码样式，这样做允许我们把精力放到贡献的内容上，而不是代码风格。