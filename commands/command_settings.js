const commands = [{
    name:"role_create",
    description:"Creating role by name and color",
    options:[{
        name:"rol_name",
        description:"name of role",
        type:3,
        required:true,
        
    },
    {
        name:"color",
        description:"color of role",
        type:3,
        required:true,
        choices:[{
            name:"⚪ (White)",
            value:"White"
        

        },
        {
            name:"⚫ (Black)",
            value:"Black"
            

        },
        {
            name:"🔵 (Blue)",
            value:"Blue"

        },
        {
            name:"🟡 (Yellow)",
            value:"Yellow"

        }
        ,
        {
            name:"🟠 (Orange)",
            value:"Orange"

        },
        {
            name:"🔴 (Red)",
            value:"Red"

        },
        {
            name:"🟣 (Purple)",
            value:"Purple"

        }
        ,
        {
            name:"🔘 (Grey)",
            value:"Grey"

        },
        {
            name:"🟢 (Green)",
            value:"Green"

        }]
    }]
},
{
    name:"role_admin",
    description:"Role vote accepter roles",
    options: [{
        name: "roles1",
        description: "role accepter man",
        type: 8,
        required: true
    },
    {
        name: "roles2",
        description: "role accepter man optional",
        type: 8,
        required: false
    },
    {
        name: "roles3",
        description: "role accepter man optional",
        type: 8,
        required: false
    }]

},
{
    name:"get_role",
    description:"You can get roles by select them",
    options: [{
        name: "role",
        description: "Select role",
        type: 8,
        required: true
    }]

}
]
export default commands


