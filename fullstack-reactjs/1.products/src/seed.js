function generateVoteCount() {
    return Math.floor(Math.random() * 100);
}

const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        productImageUrl: "https://icon-icons.com/icons2/20/PNG/256/Business_packingboxes_negocio_2338.png"
    },
    {
        id: 2,
        title: 'Green Dog',
        description: 'Something happen in the yard, there is a green dog.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        productImageUrl: "https://icon-icons.com/icons2/20/PNG/256/Business_packingboxes_negocio_2338.png"
    },
    {
        id: 3,
        title: 'Brown Fox',
        description: 'In the jungle, a brown fox is jumping over the tree.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        productImageUrl: "https://icon-icons.com/icons2/20/PNG/256/Business_packingboxes_negocio_2338.png"
    },
    {
        id: 4,
        title: 'Big Elephant',
        description: 'All animal are sing a song, they are singing very happy.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        productImageUrl: "https://icon-icons.com/icons2/20/PNG/256/Business_packingboxes_negocio_2338.png"
    }
]

export default products;