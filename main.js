function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FvuR-6teC/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
console.log("Got Results");    
}