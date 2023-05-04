function START(){
    navigator.mediaDevices.getUserMedia( {audio : true } );
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xRsG4FmHL/model.json', loaded);
}
 function loaded(){
    classifier.classify(got_result);
 }

 function got_result(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_label").innerHTML = "Detected voice of - " + result[0].label;

        img = document.getElementById("image");
       

        if(result[0].label == "meow"){
            img.src = "cat.gif";
        }
        else if (result[0].label == "bark"){
            img.src = "dog.gif";
        }
        else{
            img.src = "listen.gif";
        }

    }
  
     
   
 }

