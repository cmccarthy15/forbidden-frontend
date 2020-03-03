const defaultBoard = {
    rows: [1,1,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,6,6],
    columns: [3,4,2,3,4,5,1,2,3,4,5,6,1,2,3,4,5,6,2,3,4,5,3,4]
}

const tiles = [
    { 
        id: 1,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 2,
        name: 'Watchtower',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-watchtower.jpg',
        resource: null,
        row: 1,
        column: 1
    },
    { 
        id: 3,
        name: 'Observatory',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-observatory.jpg',
        resource: null,
        row: 3,
        column: 3
    },
    { 
        id: 4,
        name: 'Phantom Rock',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-island-tile.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 5,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 6,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 7,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 8,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 9,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 10,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 11,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 12,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 13,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 14,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 15,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 16,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 17,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 18,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 19,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 20,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 21,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 22,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 23,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    },
    { 
        id: 24,
        name: 'Twilight Hollow',
        img: 'https://www.sunderedrealm.com/wp-content/uploads/2019/10/fi-tile-twilight-hollow.jpg',
        resource: null,
        row: 2,
        column: 2
    }
]

tiles.forEach((tile, index) => {
    tile.row = defaultBoard.rows[index]
    tile.column = defaultBoard.columns[index]
})

export { tiles }

