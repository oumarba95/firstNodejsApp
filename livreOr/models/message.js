let connection = require('../config/db');
let moment = require('../config/moment');
class Message {

 constructor(row){
     this.row = row;
 }
 get created_at() {
     return moment(this.row.created_at);
 }
 get content (){
     return this.row.content;
 }
 get id (){
     return this.row.id
 }
    static create(content,cb) {
        connection.query('insert into messages set  content = ?,created_at = ?',[content,new Date()],(err,result) => {
            if(err) throw err;
            cb(result);
        })
    }
    static all(cb) {
        connection.query('select * from messages',(err,rows) =>{
            if(err) throw err;
            cb(rows.map((row) => new Message(row)));
        })
    }
    static find(id,cb) {
        connection.query('select * from messages where id = ? LIMIT 1',[id],(err,rows) =>{
            if(err) throw err;
            cb(new Message(rows[0]));
        })
    }
    

}

module.exports = Message;