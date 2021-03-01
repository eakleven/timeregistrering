
export const users = [
    {
        name: 'Erik Andreas',
        hours: {
            Nesbyen: [],
            Risør: [],
            Hjemme: []
        },
        salary: 120

    },
    {
        name: 'Martin',
        hours: {
            Nesbyen: [],
            Risør: [],
            Hjemme: []
        },
        salary: 120
    },
    {
        name: 'Håvard',
        hours: {
            Nesbyen: [],
            Risør: [],
            Hjemme: []
        },
        salary: 120
    }
]

export function getUsers (){
    return users;
}

export function setUsers (name, salary){
    users.push({
        name: name,
        hours: {
            Nesbyen: [],
            Risør: [],
            Hjemme: []
        },
        salary: salary
    })
}