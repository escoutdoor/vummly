// req : email, subject, description
// subtext
// title
// required
// type select, string, textarea
// not req = optional

const data = [
    {
        id: 1,
        type: 'string',
        validation: 'email',
        title: 'Your email address',
        required: true
    },
    {
        id: 2,
        type: 'string',
        validation: 'subject',
        title: 'Subject',
        required: true
    },
    {
        id: 3,
        type: 'string',
        validation: 'url',
        required: true,
        title: 'URL of Recipe Page or Search Results',
        subtext: 'Paste the URL of the recipe page or search results you are discussing. This will help us quickly see what you are seeing.'
    },
    {
        id: 4,
        type: 'textarea',
        title: 'Description',
        validation: 'textarea',
        subtext: 'Please enter the details of your request. You can attach a screen shot below if that helps explain a problem you are seeing. Have an idea you want to share with the Yummly community? Share it here. A member of our support staff will respond as soon as possible.',
        required: true
    },
    {
        id:5,
        type: 'select',
        title: 'Your Browser',
        selectData: [{id:1, label: 'Chrome', value: 'chrome'}, {id:2, label: 'Opera', value: 'opera'}, {id:3, label: 'Safari', value: 'safari'}, {id:4, label: 'Firefox', value: 'firefox'}, {id:5, label: 'Internet Explorer 10', value: 'internet-explorer-10'}, {id:6, label: 'Internet Explorer 11', value: 'internet-explorer-11'}, {id:7, label: 'Internet Explorer 8 or earlier', value: 'internet-explorer-8-or-earlier'}, {id:8, label: 'Internet Explorer 9', value: 'internet-explorer-9'}, {id:9, label: 'Other', value: 'other'}],
        subtext: "If you are reporting a bug or problem with how the site works, please tell us the browser you are using. If yours isn't listed, please tell us in the comments above.",
    },
    {
        id:6,
        type: 'select',
        title: 'Recipe Issue Type',
        selectData: [{id:1, label: 'Ingredient Issue', value: 'ingredient-issue'}, {id:2, label: 'Nutritional Issue', value: 'nutritional-issue'}, {id:3, label: 'Image Issue', value: 'image-issue'}, {id:4, label: 'Directions Issue', value: 'directions-issue'}, {id:5, label: 'Other', value: 'other'}],
    },
    {
        id: 7,
        type: 'string',
        title: 'Email',
    },
    {
        id: 8,
        type: 'string',
        title: 'Device Info',
    },
    {
        id: 9,
        type: 'string',
        title: 'Content Id',
    },
    {
        id:10,
        type: 'select',
        title: 'Video Issue Type',
        selectData: [ {id:1, label: 'Other', value: 'other'}, {id:2, label: 'Video player', value: 'video-player'}]
    },
    {
        id:11,
        type: 'select',
        title: 'Product Issue Type',
        selectData: [{id:1, label: 'Other', value: 'other'}, {id:2, label: 'Image', value: 'image'}, {id:3, label: 'Buying', value: 'buying'}, {id:4, label: 'Price', value: 'price'}]
    },
    {
        id: 12,
        type: 'string',
        title: 'User identifier',
    },
    {
        id: 13,
        type: 'string',
        title: 'Content Name',
    },
    {
        id: 14,
        type: 'string',
        title: 'Deeplink',
    },
]

export {data}