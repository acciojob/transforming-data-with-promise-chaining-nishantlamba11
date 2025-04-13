//your JS code here. If required.
let btn=document.querySelector("#btn");
let output=document.querySelector("#output");
let input=document.querySelector("#ip");

btn.addEventListener("click",handleclick)

function handleclick(){
	let promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(input.value)
		},2000)
	})
		promise.then(mul=>{
		output.textContent=`Result:${mul}`
			let multi=mul*2
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(multi)
				},2000)
			})
	}).then(sub=>{
			output.textContent=`Result:${sub}`
			let subt=sub-3
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(subt)
				},1000)
			})
	}).then(div=>{
			output.textContent=`Result:${div}`
			let dived=div/2
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(dived)
				},1000)
			})
			
	}).then(add=>{
			output.textContent=`Result:${add}`
			let added=add+10
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(added)
				},1000)
			})
	}).then(final=>{
			output.textContent=`Result:${final}`
	})



	
}