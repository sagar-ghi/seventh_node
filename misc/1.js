
//limit
//skip

// [1, 2, 32, 3, 4, 5, 6, 6, 7, 7, 78,]
//sort
//1=>ascending order
//o=>descending order
router.get('/all', async (req, res) => {
    //!pagination
    // const { limit = 10, page = 1 } = req.query
    // const users = await User.find()
    //     .skip((parseInt(page) - 1) * parseInt(limit))
    //     .limit(parseInt(limit))

    //search
    const { search } = req.query


    // const users = await User.find({ firstName: new RegExp(`^${search}`, 'i') })
    const users = await User.find()
        // .or([{ email: 'harry@gmail.com' }, { firstName: "Harry" }])
        .and([{ email: 'harry@gmail.com' }, { firstName: "Harry" }])
    res.send(users)
    // console.log(req.query)
    //FE request
    //data 10
    //page 1

    // const users = await User.find().skip(5).limit(10)
    // .sort({ firstName: 1 })
    // .select({ _id: 1, email: 1, firstName: 1 })
    // .select('_id email firstName')
    // .skip(3)
    // .limit(3)
    // res.send(users)
})


//query
//comparison query operators
//eq =>equals to
//ne => not equals
//gt =>greater than
//gte =>greater than or equal to
//lt =>less than
//lte =>less than or equal to
//in 
//nin=>

//logical query operators
//and 
//or