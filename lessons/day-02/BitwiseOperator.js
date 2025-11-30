
if(getFirstNumber() !=0 && getSecondNumber() !=0){
    console.log('All numbers are NOT zero')
} else{
    console.log('')
}

function getFirstNumber(){
    console.log('Calling 1st function...');
    return 1;
}

function getSecondNumber(){
    console.log('Calling 2nd function...')
    return 2;
}