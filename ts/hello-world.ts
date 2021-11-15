
    let hwt = "Hello, Typescript world!";
    let charlie = "Charlie";

    let nbr: number = 0;
    
    console.log(charlie, hwt);



const loaded = (abc: string): void => {
    let hw = document.getElementById("hw");
    if(hw != null) {
        hw.innerText = `${charlie}, ${hwt}`
    }
};