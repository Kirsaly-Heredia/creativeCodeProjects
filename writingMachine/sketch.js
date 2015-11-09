var lyrics; // this is gonna hold the text file

var theSong; // this is gonna hold the current chapter

var thefont; // what font are we using?

var currentSong = 0; // what chapter are we on?

var documentfrequency = {}; // initialize JSON for the documents

var termfrequency = {}; // JSON for the terms

function preload() {
  lyrics = loadStrings("tklyrics.txt");
  thefont = loadFont("COOPBL.TTF"); // loads a font from the disk
}

function setup() {
  createCanvas(800, 600);
  textFont(thefont, 18);
  textSize(18);
  doDF(); // figure out the words counts for the whole damn thing
  doTF(currentSong); // figure out the TFIDF
  
}

function draw() {
  background(255);
  
  var thresh = 1.0-(mouseY/height);

  text(currentchapter + ": " + thresh, 20, 20);
  
  var xpos = 20;
  var ypos = 50;
  
  for(i in termfrequency)
  {
    if(termfrequency[i]>=thresh)
    {
      tw = textWidth(i+' ');
      if(xpos+tw>width)
      {
        xpos = 20;
        ypos = ypos+20;
      }
      text(i, xpos, ypos);
      xpos = xpos + tw;
    }
  }
}

/*function keyReleased()
{
  currentSong = (currentSong+1) % alice.length;
  doTF(currentSong); // figure out the TFIDF
}

function doTF(c)
{
  termfrequency = {}; // blow out the brains of the TF
  var chapter = lyrics[c].split(' '); // individual words
  for(var i = 0;i<chapter.length;i++)
  {
      if(termfrequency.hasOwnProperty(chapter[i]))
      {
        // the word is already in the data structure
        termfrequency[chapter[i]]++;
      }
      else
      {
        termfrequency[chapter[i]]=1;
      }    
  }
  
  for(i in termfrequency)
  {
    termfrequency[i] = termfrequency[i]/documentfrequency[i];
    //console.log(i + ": " + termfrequency[i]); // test
  }

}

function doDF() // compute the document frequency
{
  for(var i = 0;i<lyrics.length;i++) // go thru each chapter
  {
    theSong=lyrics[i].split(' '); // individual words
    for(var j = 0;j<theSong.length;j++) // go thru each word in the chapter
    {
      if(documentfrequency.hasOwnProperty(theSong[j]))
      {
        // the word is already in the data structure
        documentfrequency[theSong[j]]++;
      }
      else
      {
        documentfrequency[theSong[j]]=1;
      }
    }
  }
  
  for(i in documentfrequency)
  {
    //console.log(i + ": " + documentfrequency[i]); // test
    
    //if(documentfrequency[i]<10) console.log(i + ": " + documentfrequency[i]);
  }

}*/