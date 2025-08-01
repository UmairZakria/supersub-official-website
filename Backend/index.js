const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UserModel = require('./models/Users')
const AdminModel = require('./models/admin')
const AdminbankModel = require('./models/adminbank')
const connectionModel = require('./models/connections')
const AdmincontactModel = require('./models/admincontact')
const CountryModel = require('./models/country')





const SCREAT_KEY = "Umair"
const app = express(

)
app.use(cors({
    origin: '*',

    credentials: true
}));
app.use(express.json(

))
mongoose.connect('mongodb+srv://supersubsofficial:XbFH3oNaURral1hG@supersub.2odym.mongodb.net/?retryWrites=true&w=majority&appName=supersub')
// mongoose.connect('mongodb://localhost:27017/client1')



app.get('/', (req, res) => {
    return res.json({ 'status': 'work' })
})
app.post('/rigister', async (req, res) => {
    try {

        const { name, email, password, plan, country } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ 'status': 'useralready' })
        } else {


            const passwordhash = await bcrypt.hash(password, 10)
            const user = new UserModel({ name, email, password: passwordhash, plan, country });
            await user.save();
            res.json(user)
        }
    }
    catch (err) {
        // Catch and handle any errors
        console.error(err);
        res.json({ 'status': 'Server error' });
    }
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email === 'ADMIN-SRK@admin.com') {
        if (password === 'Aa@746612') {
            const token = jwt.sign({ email: email }, SCREAT_KEY, { expiresIn: '15m' })

            return res.json({ 'status': 'adminfull', 'admintoken': token })

        } else {
            return res.json({ 'status': 'adminnopass' })

        }
    } else {

        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.json({ 'status': 'nouser' })

        }

        const pass = await bcrypt.compare(password, user.password)

        if (!pass) {
            return res.json({ 'status': 'nopass' })
        }

        const token = jwt.sign({ userId: user._id, user: user }, SCREAT_KEY, { expiresIn: '5h' })
        console.log(token)
        res.json({ token });
    }
})
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.json({ 'Status': 'fail1' });
    }

    jwt.verify(token, SCREAT_KEY, (err, user) => {
        if (err) {
            return res.json({ 'Status': 'fail2' });
        }

        req.user = user;

        next();
    });
};

// Protected Route (e.g., Dashboard)
// admin changes 
app.put('/dataupdate:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, plan: req.body.plan, email: req.body.email, })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.delete('/deletedata:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))

})

app.get('/getuser', (req, res) => {
    UserModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
)

app.post('/getfreeuser', async (req, res) => {
    try {
        const { id } = req.body;

        const product = await ProductModel.find({ id });
        if (!product) {
            return res.json({ 'status': 'noproduct' });
        }
        res.json(product)

    } catch (err) {
        res.status(500).send('Error fetching product');
    }
});

const authenticate_admin_Token = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.json({ 'status': 'notoken' })

    }
    jwt.verify(token, SCREAT_KEY, (err, email) => {
        if (err) {
            return res.json({ 'status': 'extoken' })
        }
        req.email = email
        next()
    })
}

app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!', user: req.user });
});
// Admin authin 
app.post('/adminauth', async (req, res) => {
    try {
        const { paypal, binance, connection1, connection2, connection3 } = req.body;
        const admin = new AdminModel({ paypal, binance, connection1, connection2, connection3 });
        await admin.save();
        res.json(admin)


    } catch (err) {
        console.log(err)
    }
})
app.post('/updateadminauth', (req, res) => {
    const id = req.body.id
    AdminModel.findByIdAndUpdate({ _id: id }, { paypal: req.body.paypal, binance: req.body.binance, connection1: req.body.connection1, connection2: req.body.connection2, connection3: req.body.connection3 })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.post('/updatecountry', (req, res) => {
    const countryName = req.body.country;

    CountryModel.findOneAndUpdate(
        { country: countryName }, 
        {
            connection1: req.body.cc1,
            connection2: req.body.cc2,
            connection3: req.body.cc3
        },
        { new: true } 
    )
    .then(updatedDoc => {
        if (!updatedDoc) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.json(updatedDoc);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});
app.post('/addcountry', (req, res) => {
    const newCountry = new CountryModel({
        country: req.body.country,
        connection1: req.body.cc1,
        connection2: req.body.cc2,
        connection3: req.body.cc3
    });

    newCountry.save()
        .then(savedCountry => res.json(savedCountry))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.get('/getcountries', (req, res) => {
    CountryModel.find()
        .then(countries => res.json(countries))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.get('/adminauth', (req, res) => {
    AdminModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
)
// Admin different

app.post('/admincontact', async (req, res) => {
    try {
        const { email, phonenumber } = req.body;
        const data = new AdmincontactModel({ email, phonenumber });
        await data.save();
        res.json(data)


    } catch (err) {
        console.log(err)
        res.json(err)

    }
})
app.post('/adminbank', async (req, res) => {
    try {
        const { bname, accountno, accountholder, iban, country } = req.body;
        const data = await AdminbankModel.findOneAndUpdate(
            {},
            {
                $push: {
                    banks: { bname, accountno, accountholder, iban, country }
                }
            },
            { new: true, upsert: true }
        );
        // await data.save();
        res.json(data)


    } catch (err) {
        console.log(err)
        res.json(err)

    }
})
app.get('/adminbank', (req, res) => {
    AdminbankModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
)
app.post('/adminbankdel', async (req, res) => {

    try {
        const { bname } = req.body;

        const updatedDocument = await AdminbankModel.findOneAndUpdate(
            {},
            {
                $pull: { banks: { bname: bname } }
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.json({ name: 'bname' })
        }

        res.json(updatedDocument);

    } catch (err) {
        console.log(err);
        res.json(err)
    }


})
app.put('/admincontact', (req, res) => {
    const { email, phonenumber, id } = req.body;
    AdmincontactModel.findByIdAndUpdate({ _id: id }, { email: email, phonenumber: phonenumber })
        .then((res) => { res.json(res) })
        .catch((err) => { res.json(err) })
})
app.get('/admincontact', (req, res) => {
    AdmincontactModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
)
app.get('/adminconnection', (req, res) => {
    connectionModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
)
app.post('/adminconnection', async (req, res) => {
    try {
        const { uae, qatar, malaysia } = req.body;
        const data = new connectionModel({ uae, qatar, malaysia });
        await data.save();
        res.json(data)


    } catch (err) {
        console.log(err)
        res.json(err)

    }
})



app.listen(5000, () => {
    console.log("server is running")

})