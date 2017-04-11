# phpwind 9 upgrade Fans 1.0

Upgrading from phpwind 9 to Fans 1.0 is a very simple and dangerous operation that will be similar to how to upgrade.

> Before upgrading, make sure if you have installed plug-ins and templates for too long, too long to be unloaded here proposed temporary uninstall all plug-ins and templates, the template as the default template system.

## Pre-operation

* You should make a backup of your original phpwind 9 program.
* You should make a backup of your original database.
* Download the latest version of phpwind Fans 1.0 into the [https://github.com/medz/phpwind/releases](https://github.com/medz/phpwind/releases) page to find the latest Fans 1.0 program, or enter the QQ Group Download the latest Fans 1.0 program.

## Simple and rude upgrade

> This method can be normal to upgrade phpwind 9 to Fans 1.0 But the database structure will not be changed, when you use the upgraded program to move to higher than the MySQL 5.5 version of the above, the program will be an unknown error.

Before performing the following steps, you should perform the "pre-operation" first:

1. will download the Fans 1.0 archive extract, the program code directly to the original phpwind 9 procedures.
2. Execute the final "completion step" of the document.

## Safe upgrade

> This method can safely upgrade to Fans 1.0 and ensure that the Fans program in the future when the better compatible with the new environment, the implementation of "safe upgrade" before the implementation of the "pre-operation"

Upgrade follows:

1. Write in
2. First of all, you should enter the MySQL database, export all your data, note that the exported data does not need to export data table structure (if export data table structure, all of the upgrade will be in vain.).
3. You should create a new database and then install the Fans 1.0 program on the new program.
4. Enter the database occupied by Fans 1.0, the step *2* derived data into the Fans 1.0 library. Note that the reasons for the importation of the database, there may be a case of import errors, if it appears, you should follow the MySQL prompts to edit the data, which is generally not a lot.
5. Copy your phpwind 9 program in the `/attachment`,` /windid/attachment` to Fans 1.0 program directory.
6. Execute the final "completion step" of the document.

## Complete the steps

The completion step is mainly used to clean up the upgraded cache and other data information.

Please manually remove the `/data/cache`,`/data/compile` directory in the post-upgrade program.

> Delete the cache, the program will re-cache the content, so do not worry.
