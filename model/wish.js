const fs = require('fs')
const path = require('path')
const filePath = path.join(path.dirname(require.main.filename),'data', 'wishes.json')

module.exports = class Wish
{
    constructor(wish)
    {
        this.description = wish
    }

    saveWish()
    {
        fs.readFile(filePath, (error, fileContant ) =>{
            let wishes = []

            if(!error)
            {
                wishes = JSON.parse(fileContant)
            }
            else
            {
                console.log(error)
            }

            wishes.push(this);

            fs.writeFile(filePath,JSON.stringify(wishes), (error) => {

                if(!error)
                {
                    console.log('wish saved')
                }
                else
                {
                    console.log(error)
                }

                
            })

        })
    }


    static fetchAllWishes(callBack)
    {
        fs.readFile(filePath, (error, fileContant) =>{
            if(error)
            {
                callBack([])
            }
            callBack(JSON.parse(fileContant))
        })
    }

}