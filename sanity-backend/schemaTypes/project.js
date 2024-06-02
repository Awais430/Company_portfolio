export default {
    name:'Project',
    title:'Project',
    type:'document',
    fields:[
        {
            name:'Projectname',
            title:'ProjectName',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'navigationLink',
            title:'navigationLink',
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
