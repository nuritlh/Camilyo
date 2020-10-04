export const sortPeople = (data, sortBy) => {
    (sortBy === "name") ? data.sort(compareByName) : data.sort(compareByDob);
    return data;
}

export const compareByName = (a, b) => {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
};

export const compareByDob = (a, b) => {
    const dateA = new Date(a.dob);
    const dateB = new Date(b.dob);
    return dateA - dateB;
};

export const compareNumber = (a, b) => {
    return a.number - b.number;
};


export default {
    sortPeople
}
