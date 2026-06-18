function example(){
    console.log("B")
}

const example1 = ()=>{
    console.log("D")
}
console.log("A")
setTimeout(example ,0)
setTimeout(example1,2000)
console.log("C")

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("HI")
    },1000)
})
  
    
    
promise.then(res=>{console.loh(res)}).catch(err=>{console.log(err)})