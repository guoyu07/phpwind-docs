Fans Edition Source Code Contribution Guide
==================

In the guide, will guide the user or developer to make positive contributions to the Fans source code.

## Error feedback

In order to promote active collaboration, Fans version strongly encourages the use of Pull Request, not just feedback errors. "Error Feedback" can be sent as a Pull Request containing a failed test.

If you submit the wrong feedback, then the feedback should contain a title and detailed description of the problem, and as much as possible to provide relevant information and error problems code examples. The main purpose of error feedback is to allow yourself and others to simply reproduce and fix the error.

Keep in mind that the original intention of error feedback is to allow other people with the same problem to work together to solve the problem. Do not expect feedback errors soon after someone will fix it immediately. Creating error feedback is mainly to help you and others start to fix the problem.

> *Fans* source code hosted on *GitHub* above: [medz/phpwind](https://github.com/medz/phpwind).

## Core development discussion

If you want to suggest a feature, or acts to improve the existing Fans, go Issues [medz/phpwind](https://github.com/medz/phpwind) project discussion. If you would like to make a functional suggestion, we would like you to contribute some code to this feature.

Realization of the error, new features and existing features will be discussed in [QQ group:30568679] conduct(https://shang.qq.com/wpa/qunwpa?idkey=4bdc6869a010f9371c81047847960e9d89ce0585e23308a4f00f99ecb27c48f7) group. Fans defenders *Seven Du* are available online at non-working days from 8pm to 11pm and on weekends, and other times occasionally.

## Select the branch

For different versions, there are different branches in the Fans repository, and only upwards compatible fixes are merged into the master branch, and should only be sent to the master branch if it is only for the old version of the fix.

The main new features should be sent to the master branch, which contains the next version of the Fans release content.

Minor and fully compatible with the existing Fans release version can be sent to the latest stable branch.

If you are not sure whether your function is primary or secondary, please ask Seven Du in the QQ group.

## Security vulnerabilities

If you find security holes, you can submit Issues warehouse, or send an email to [shiweidu@outlook.com](mailto:shiweidu@outlook.com), all security vulnerabilities will be addressed promptly.

## Coding style

Fans Edition strictly follows the **PSR-2** Encoding Specification and **PSR-4** Auto Load Specification.

## StyleCI

Fans Edition uses StyleCI to do to correct the code, all the PR after the merger will be in the style correction codes, this allows us to concentrate on the content contribution, rather than coding style.
