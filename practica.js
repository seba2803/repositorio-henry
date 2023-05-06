function deleteElements(arr){
    let newlista = new Set(arr);//el objeto Set no acepta elementos repetidos
    return [...newlista];
  }
  console.log(deleteElements([1,1,2,2,3,4,5,5]));

