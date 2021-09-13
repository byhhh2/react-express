//API

const express_ = require('express');
const router = express_();
const cors_ = require('cors');
const connection_ = require('../config/DB.tsx');

router.use(cors_());

router.get('/index', (req, res) => {
  res.send({ index: 'this is index!!' });
});

router.get('/student/get', (req, res) => {
  connection_.query(
    'select student.id as id, student.name as name, department.name as department_name from student, department;',
    (err, data) => {
      if (!err) res.send({ students: data });
      else res.send(err);
    }
  );
});

router.post('/student/post', function (req, res) {
  const body = req.body;
  console.log(req.body);

  connection_.query(
    'insert into student (name, department_id) values (?, ?);',
    [body.name, body.department_id],
    function () {
      res.redirect('/');
    }
  );
});

module.exports = router;
