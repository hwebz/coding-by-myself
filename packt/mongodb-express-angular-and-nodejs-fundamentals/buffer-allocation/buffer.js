var buf1 = Buffer.alloc(5);

var buf2 = new Buffer(5);

var buf3 = Buffer.from([10, 20, 30, 40, 50]);

var buf4 = new Buffer([10, 20, 30, 40, 50]);

var buf5 = new Buffer("Hi Packt students!", "utf-8");

var buf6 = Buffer.from("Hi Packt students!", "utf-8");

var len = buf5.write("Packt student", "utf-8");

console.log(buf1);

console.log(buf2);

console.log(buf3);

console.log(buf4);

console.log(buf5);

console.log(buf6);

console.log(len);

console.log(buf5.toString())

console.log(buf5.toString("utf-8"))

console.log(buf5.toString("utf-8", 0, 13))

var buf7 = Buffer.allocUnsafe(15);

var buf8 = Buffer.alloc(15);

console.log(buf7);

console.log(buf8);

console.log(Buffer.byteLength("Packt student", "utf-8"));

console.log(buf8.length);

buf5.copy(buf8, 0, 0, buf5.length)

console.log(buf8.toString())

console.log(buf8.slice(0, 5).toString())