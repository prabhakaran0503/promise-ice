let storage={
    frutis:["mango","orange"],
    liquied:["water","ice"],
    holder:["cop","cone","stick"],
    toppings:["peanus","chocolate"]
}

let promise=new Promise((resolve,reject)=>{
    let ans=true;
    if(ans){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(()=>{
   return new Promise((resolve,reject)=>{
    console.log(`shop is open`);
    resolve()
   })
}).then(()=>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`${storage.frutis[1]} was selected`);
        resolve()
   },100)
        })
}).then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
            console.log(`production was started`); 
        },2000)
    })
}).then(()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
                console.log(`fruits has been chopped`);
            },4000)
        })
}).then(()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log(`${storage.liquied[1]} was added`);
    },5000)
})
}).then(()=>{
    return new Promise((resolve,reject)=>{
        resolve()
    console.log(`start the machine`);
})
}).then(()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log(`Ice cream placed on ${storage.holder[0]}`);
    },5000)
})
}).then(()=>{
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve()
        console.log(`${storage.toppings[0]} was added`);
    },6000)
})
}).then(()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log(`serve the Ice cream`);
    },7000)
})
})
.catch(()=>{
    console.log(`shop is close`);
})