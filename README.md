# Discord-Role-Creator-Bot

Hi. I'm Fatih. I made this bot to practice on node.js. I prefered to improve myself on node.js by doing discord bot. Because I'm using discord my daily life.


# How to install:
You can download code as zip or you can try to terminal "git clone https://github.com/FatihTheConqueror/Discord-Role-Creator-Bot.git"


After that, you have to add your bot's token on the code. You can get your bot's token in discord developer portal

![alt text](https://i.hizliresim.com/3jfpiye.png)

![alt text](https://i.hizliresim.com/fk332tz.png)

Then you have to connect your bot to your server. After that, you can run code and you can use the bot



# **Role system:**

Bot, creating role  with parametres "role_name" and "role_color". For this, we got some command.

# ** Slash Commands:**


## **/role_admin:**
This command is you adding roles to approve or reject role creating requests.

![alt text](https://i.hizliresim.com/rrtwo55.png)

1 option is required, 2 option is optional. These roles will approve or reject role create requests.


## **/role_create:**
This command is creating role by getting "rol_name" and "role_color". The role permissions is same with @everyone permissions. We can call that "default permissions"

Role_name is a string option. You can't enter role name that already in use.

![alt text](https://i.hizliresim.com/6ynkgzd.png)


Role_color is color of role. You can select them in menu

![alt text](https://i.hizliresim.com/mlxh3kg.png)


After that, Bot will create a vote for this request.

![alt text](https://i.hizliresim.com/cyge3d9.png)

Here, The roles that you set them with "/role_admin" before, can approve this request or reject this.

If you reject this request, bot will edit message like this:

![alt text](https://i.hizliresim.com/a4v83gn.png)

If youa approve this request, bot will create role by "rol_name" and "role_color". Permissions of role is default or "@everyone" permissions.

![alt text](https://i.hizliresim.com/b8liwed.png)


## **/get_role:**
This command is you adding roles the user. Users can select only default permissions roles. You can use this command getting roles by created "/role_create"

![alt text](https://i.hizliresim.com/cghk6xl.png)









