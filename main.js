var qute1 = `“Be yourself; everyone else is already taken.”`;
var qute2 = `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`;
var qute3 = `“So many books, so little time.”`;
var qute4 = `“A room without books is like a body without a soul.”`;
var all = [qute1, qute2, qute3, qute4];
function quote() {
    document.getElementById('rand').innerHTML = all[Math.floor(Math.random() * 3)];
}