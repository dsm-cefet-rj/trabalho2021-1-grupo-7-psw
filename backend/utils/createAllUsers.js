
const createAllUsers = (users, companies)=>{
    let allUsers = users
    companies.map(company => {
        allUsers.push(company)
    })

    return allUsers
}

module.exports = createAllUsers