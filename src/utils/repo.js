export const orderBy = (list, sort = 'asc') => {
    let array = [...list];

    if(sort === 'asc') {
        array.sort((a, b) => {
            if (a.stargazers_count < b.stargazers_count) return -1;
            if (a.stargazers_count > b.stargazers_count) return 1;
            return 0;
        });

        return array;
    }

    array.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) return -1;
        if (a.stargazers_count < b.stargazers_count) return 1;
        return 0;
    });

    return array;
}