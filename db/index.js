const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:banana794@localhost/acme-react-redux')
const {STRING, UUIDV4, UUID, TEXT} = Sequelize
const faker = require('faker')


const Brewery = conn.define('brewery', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: STRING
       
    },
    about: {
        type: TEXT
    
    }
})

const createBrew = async(brewNum) => {
    try{
        let i = 0
        while(i < brewNum) {
    
            await Brewery.create({
                name: faker.company.companyName(),
                address: faker.address.streetAddress(),
                about: faker.lorem.sentences()
            })
    
            i++
    
        }

    }
    catch(ex){
        console.log(ex)
    }
   
}


Brewery.generateRandom = function() {
    return this.create({name: faker.company.companyName()})
}

const syncAndSeed = async() => {
    try{
        await conn.sync({force: true})
        await createBrew(20)
    }catch(ex) {
        console.log(ex)
    }
}


module.exports = {
    conn,
    syncAndSeed,
    models : {
        Brewery
       
    }


}

