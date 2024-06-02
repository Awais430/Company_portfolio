export default {
    name:'TeamMember',
    title:'Team Member',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Image URL',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}
