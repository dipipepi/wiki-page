const itemsFromServer = {
    persons: [
        {
            title: 'person 1',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 1
        },
        {
            title: 'person 2',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 2
        },
        {
            title: 'person 3',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 3
        }],
    quests: [
        {
            title: 'quest 1',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 1
        },
        {
            title: 'quest 2',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 2
        },
        {
            title: 'quest 3',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 3
        }],
    regions: [
        {
            title: 'regions 1',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 1
        },
        {
            title: 'regions 2',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 2
        },
        {
            title: 'regions 3',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 3
        }],
    cities: [
        {
            title: 'city 1',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 1
        },
        {
            title: 'city 2',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 2
        },
        {
            title: 'city 3',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 3
        }],
    items: [
        {
            title: 'item 1',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 1
        },
        {
            title: 'city 2',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 2
        },
        {
            title: 'city 3',
            text: 'Phasellus maximus massa non faucibus posuere. Cras vulputate lacinia dolor eget consequat. Nam tristique nisl ut ante laoreet porta. In nec leo ac enim tempor dictum. Sed ac ex dapibus, commodo mauris sed, malesuada sapien. Curabitur convallis sagittis turpis eget ornare. Maecenas dui tellus, vulputate eu venenatis sit amet, imperdiet at purus. Donec hendrerit scelerisque massa nec interdum. Donec pretium lectus vitae tempus mattis. Nam placerat, libero vel tempor iaculis, felis tellus rhoncus urna, vitae porttitor libero nisl quis sem.',
            image: 'https://i.redd.it/w3kr4m2fi3111.png',
            id: 3
        }]
};

export default itemsFromServer;