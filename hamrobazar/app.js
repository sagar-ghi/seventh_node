
import express from 'express'
import morgan from 'morgan'

import userRoute from './api/user/router.js'

const app = express();


//client trust
//mongoose

app.use(morgan('dev'));
app.use(express.json());

// app.post('/users/create', async (req, res) => {
//     console.log(req)
// })

// app.put('/users/update', async (req, res) => {
//     console.log(req)
// })

app.use('/users', userRoute)


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app

