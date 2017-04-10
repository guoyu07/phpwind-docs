# Fans Installation Guide

> Installation Guide will explain how to install Fans version of the program.

## Server requirements

Fans program will have some system requirements.

You need to make sure that the following extensions are installed on your server:

- PHP >= 5.6.*
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- cURL PHP Extension
- GD PHP Extension
- mcrypt PHP Extension
- zip PHP Extension

> In fact, most of the above environment is installed by default, but it is recommended to check whether the environment has to expand these installation.

## Installation Fans

> Here is the use of GitHub from the source to obtain the form of installation, rather than dist installation.

First of all, you should enter the [releases] (https://github.com/medz/phpwind/releases) page, download the Latest Fsns program, select ** source code ** download the source code.

>Generally there are two versions of zip and tar.gz, choose.

Then you need to install a [Composer] (http://docs.phpcomposer.com/) but taking into account the mainland China's network environment, it is recommended to install the configuration [China full image] (https://pkg.phpcomposer.com/) so that you can use the Composer in the Chinese mainland.

After installing the Composer, download the ** source code ** to unpack it (place it into your favorite site location). Enter the program directory to execute the following commands:

```shell
composer install
```

> If you place * composer.phar * also in the Fans root directory, the `composer` keyword above is replaced with `php composer.phar`.

Composer will automatically download the required dependencies Fans program after executing the command.

When finished, turn on your website `https://yousite/install.php` asked to fill out web site in accordance with the configuration information to complete the installation.

> In the Fans 1.1 will start the root moved to the `/public` directory, 1.1 before the version is still using the root directory for the public directory configuration, 1.1 version of the public directory to start the configuration directory for the root of the site.

## Configurations

### Public directory

After installing Fans, you need to configure your Web server's root directory as public directory. The index.php file for this directory goes into the application's front-end processor as all HTTP requests.

### Configuration file

Fans framework for all configuration files are stored in the config directory. Each option is added to the document, so you are free to browse files, easily familiar with your options.

### Directory permissions

After installing Fans, you need to configure some permissions. `Data`,` attachment`, `windid/attachment` directory should allow your web server to write, otherwise Fans will not be able to write to cause the program to run abnormally.

## Web server configuration

> Elegant connection, this must be configured to allow the web server to access the dynamic dynamic website content with an elegant link, and all link requests should be configured to `public/index.php` as this is the only front-end processor for the Fans program.

### Apache

Fans Apache configuration has already done for you, to make the URL by `public/.htaccess` index.php file do not need to access. Before enabling Apache's elegant link, make sure that the * mod_rewrite * module is turned on so that the `.htaccess` file is working.

If the `.htaccess` file included with Fans is not available in Apache, try the following:

```
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

### Nginx

If you use Nginx, adding the following code to your site configuration will forward all requests to the `index.php` front end controller.

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

